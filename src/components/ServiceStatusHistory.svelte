<script>
	export let service;
	import statuses, {
		getDate,
		minsToHours,
		statusFromMins,
	} from "$lib/statuses";
</script>

<div class="flex flex-row flex-nowrap gap-0.5">
	{#each service.history as mins, i}
		<div class="flex-1 grow relative inline-block tooltip hover:cursor-pointer {statuses[statusFromMins(mins)].bgColour} h-8">
			<div class="py-2 px-4 bg-darker w-48 rounded-md z-20 absolute right-0 invisible tooltip-item -translate-y-16 translate-x-16">
				<p class="text-sm font-bold text-gray-100 pb-1">
					{getDate(service.history.length, i)}
				</p>
				<p class="text-xs leading-4 text-gray-200 pb-3">
					Offline for {minsToHours(mins)}
				</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.tooltip:hover .tooltip-item {
		visibility: visible;
	}
</style>