<script>
	export let status;
	import Button from "./Button.svelte";
	import statuses from "$lib/statuses";
</script>

<div class="block sm:mx-32 mb-16">
	<div
		class="{statuses[status.overall].bgColour} dark:bg-opacity-10 {statuses[
			status.overall
		]
			.borderColour} border-2 p-5 rounded-lg text-center shadow-2xl flex-initial"
	>
		<h3
			class="{statuses[status.overall].textColour} text-xl font-bold pb-2"
		>
			<i class="{statuses[status.overall].icon} fa-xl mb-6" />
			<br />
			{statuses[status.overall].title}
		</h3>
		<p>
			{statuses[status.overall].description}
			{#if status.overall !== "online"}
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
