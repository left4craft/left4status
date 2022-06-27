<script>
	export let status;
	import Button from "./Button.svelte";
	import statuses from "$lib/statuses";
	
	let overall, major, degraded;
	$: major = status.filter(s => s._state === 'major');
	$: degraded = status.filter(s => s._state === 'degraded');
	$: overall = major.length > 1
		? 'major' : major.length === 1
			? 'minor' : degraded.length > 0
				? 'degraded' : 'online';
</script>

<div class="block sm:mx-32 mb-12">
	<div
		class="{statuses[overall].bgColour} dark:bg-opacity-10 {statuses[
			overall
		]
			.borderColour} border-2 p-5 rounded-lg text-center shadow-2xl flex-initial"
	>
		<h3
			class="{statuses[overall].textColour} text-xl font-bold pb-2"
		>
			<i class="{statuses[overall].icon} fa-xl mb-6" />
			<br />
			{statuses[overall].title}
		</h3>
		<p>
			{statuses[overall].description}
			{#if overall !== "online"}
				<br />
				<a
					href="https://l4c.link/discord"
					class="font-bold hover:underline"
					target="_blank">Join the Discord server</a
				>
				for updates.
				<a href="https://l4c.link/discord" class="mt-4 block">
					<Button colour="bg-blurple">
						<i class="fa-brands fa-discord" /> Discord
					</Button>
				</a>
			{/if}
		</p>
	</div>
</div>
