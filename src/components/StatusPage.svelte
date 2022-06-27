<script>
	export let age;
	export let status;
	import Summary from "../components/Summary.svelte";
	import ServiceStatus from "../components/ServiceStatus.svelte";
	import { getCombinedUptime } from "$lib/statuses";
	import TpsChart from "../components/TpsChart.svelte";
	import PlayerCountChart from "../components/PlayerCountChart.svelte";

	let minecraft, websites;
	$: minecraft = status.filter(i => ['spigot', 'bungee'].includes(i.type));
	$: websites = status.filter(i => i.type === 'website');
</script>

{#if age > 5}
	<section class="m-4 xl:m-8 2xl:m-16 3xl:mx-96">
		<div class="text-center">
			<div class="bg-orange-400 shadow-2xl rounded-full inline-block py-2 px-4 bg-opacity-25">
			<span class="text-orange-400">
				<i class="fa-solid fa-triangle-exclamation" />
			</span>
				This data is over {age}  minutes old
			</div>
		</div>
	</section>
{/if}

<section id="summary" class="mx-4 lg:m-8 xl:mx-16 2xl:mx-32 3xl:mx-96">
	<Summary {status} />
</section>

<section id="status" class="m-4 xl:m-12 2xl:mx-28 3xl:mx-96">
	<div>
		<h2 class="text-3xl font-bold text-center my-8">Status</h2>
	</div>
	<div
		id="minecraft-status"
		class="block dark:bg-light shadow-2xl my-8 sm:m-4 p-5 rounded-lg"
	>
		<span class="text-xl font-semibold">Minecraft</span>
		<span class="text-gray-300">
			{getCombinedUptime(minecraft.map(service => service.history.online))}%
		</span>
		{#each minecraft as service (service.id)}
			<div class="p-4">
				<ServiceStatus {service} />
			</div>
		{/each}
	</div>
	<div
		id="websites-status"
		class="block dark:bg-light shadow-2xl my-8 sm:m-4 p-5 rounded-lg"
	>
		<span class="text-xl font-semibold">Websites</span>
		<span class="text-gray-300">
			{getCombinedUptime(websites.map(service => service.history.online))}%
		</span>
		{#each websites as service (service.id)}
			<div class="p-4">
				<ServiceStatus {service} />
			</div>
		{/each}
	</div>
</section>
<section id="tps" class="m-4 xl:m-12 2xl:m-28 3xl:mx-96">
	<div>
		<h2 class="text-3xl font-bold text-center my-8">Minecraft TPS</h2>
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:m-4">
		{#each minecraft.filter(service => service.type !== "bungee") as service (service.id)}
			<TpsChart {service} />
		{/each}
	</div>
</section>
<section id="player-count" class="m-4 xl:m-12 2xl:m-28 3xl:mx-96">
	<div>
		<h2 class="text-3xl font-bold text-center my-8">
			Minecraft Player Count
		</h2>
	</div>
	<div class="dark:bg-light shadow-2xl my-8 sm:m-4 p-5 rounded-lg">
		<PlayerCountChart services={minecraft} />
	</div>
</section>
