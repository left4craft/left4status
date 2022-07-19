<script>
	export let error;
	import Button from './Button.svelte';
</script>

<div class="block sm:mx-32 mb-16">
	<div
		class="bg-red-400 dark:bg-opacity-10 border-red-400 border-2 p-5 rounded-lg text-center shadow-2xl flex-initial"
	>
		<h3 class="text-red-400 text-xl font-bold pb-2">
			<i class="fas fa-xmark fa-xl mb-6" />
			<br />
			Error
		</h3>
		<p>Sorry, we can't display the status at the moment.</p>
		<br />
		<p class="font-semibold">{error}</p>
		<a href="https://l4c.link/discord" class="mt-4 block">
			<Button colour="bg-blurple">
				<i class="fa-brands fa-discord" /> Discord
			</Button>
		</a>
	</div>
</div>
