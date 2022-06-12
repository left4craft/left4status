<script>
	export let colour;
</script>

<div class="transform hover:scale-105 duration-300 inline-block">
	<div
		class="{colour} p-2 rounded-lg text-sm font-semibold shadow-2xl ring-white active:ring hover:underline hover:cursor-pointer"
	>
		<slot />
	</div>
</div>
