<script>
	export let response;
</script>

<div class="block sm:mx-32 mb-16">
	<div
		class="bg-red-400 dark:bg-opacity-10 border-red-400 border-2 p-5 rounded-lg text-center shadow-2xl flex-initial"
	>
		<h3 class="text-red-400 text-xl font-bold pb-2">Error</h3>
		<p>Sorry,  we can't display the status at the moment.</p>
		<br>
		<p class="font-semibold">Response code {response.status}</p>
	</div>
</div>
