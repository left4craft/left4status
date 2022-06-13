<script>
	import "../app.css";
	import Navbar from "../components/Navbar.svelte";
	import Summary from "../components/Summary.svelte";
	import ServiceStatus from "../components/ServiceStatus.svelte";
	import { getCombinedUptime } from "$lib/statuses";
	import TpsChart from "../components/TpsChart.svelte";
	import PlayerCountChart from "../components/PlayerCountChart.svelte";

	const status = {
		overall: 'minor',
		minecraft: {
			proxy: {
				name: 'Bungee',
				status: 'online',
				history: new Array(60)
					.fill(0)
					.map(() => Math.floor(Math.random() * 1)),
			},
			hub: {
				name: 'Hub',
				status: 'online',
				history: new Array(60)
					.fill(0)
					.map(() => Math.floor(Math.random() * 1)),
				player_count: 0,
				tps: 20,
			},
			survival: {
				name: 'Survival',
				status: 'online',
				history: new Array(60)
					.fill(0)
					.map(() => Math.floor(Math.random() * 4)),
				player_count: 3,
				tps: 15.63,
			},
			creative: {
				name: 'Creative',
				status: 'degraded',
				history: new Array(60)
					.fill(0)
					.map(() => Math.floor(Math.random() * 4)),
				player_count: 1,
				tps: 12.41,
			},
			party_games: {
				name: 'Party Games',
				status: 'major',
				history: new Array(60)
					.fill(0)
					.map(() => Math.floor(Math.random() * 500)),
				player_count: 0,
				tps: 7.96,
			},
		},
		websites: {
			main: {
				name: 'Main Website',
				host: 'https://www.left4craft.org',
				status: 'online',
				history: new Array(60)
					.fill(0)
					.map(() => Math.floor(Math.random() * 2)),
			},
			wiki: {
				name: 'Wiki',
				host: 'https://wiki.left4craft.org',
				status: 'online',
				history: new Array(60)
					.fill(0)
					.map(() => Math.floor(Math.random() * 3)),
			},
			short: {
				name: 'Short URLs',
				host: 'https://l4c.link',
				status: 'online',
				history: new Array(60)
					.fill(0)
					.map(() => Math.floor(Math.random() * 1)),
			}
		},
	};

	let refreshIn = 60;
	setInterval(() => {
		refreshIn--;
		if (refreshIn === 0) {
			// status = {a:2}
			refreshIn = 60;
		}
	}, 1000);
</script>

<Navbar />

<div class="dark:text-white lg:mx-40 2xl:mx-96 ">
	<section id="summary" class="m-4 xl:m-12 2xl:m-28 3xl:mx-96">
		<Summary {status} />
	</section>
	<section id="status" class="m-4 xl:m-12 2xl:m-28 3xl:mx-96">
		<div>
			<h2 class="text-3xl font-bold text-center my-8">Status</h2>
		</div>
		<div
			id="minecraft-status"
			class="block dark:bg-light shadow-2xl my-8 sm:m-4 p-5 rounded-lg"
		>
			<span class="text-xl font-semibold">Minecraft</span>
			<span class="text-gray-300">
				{getCombinedUptime(Object.keys(status.minecraft).map(id => status.minecraft[id].history))}%
			</span>
			{#each Object.keys(status.minecraft) as id (id)}
				<div class="p-4">
					<ServiceStatus service={status.minecraft[id]} />
				</div>
			{/each}
		</div>
		<div
			id="websites-status"
			class="block dark:bg-light shadow-2xl my-8 sm:m-4 p-5 rounded-lg"
		>
			<span class="text-xl font-semibold">Websites</span>
			<span class="text-gray-300">
				{getCombinedUptime(Object.keys(status.websites).map(id => status.websites[id].history))}%
			</span>
			{#each Object.keys(status.websites) as id (id)}
				<div class="p-4">
					<ServiceStatus service={status.websites[id]} />
				</div>
			{/each}
		</div>
	</section>
	<section id="tps" class="m-4 xl:m-12 2xl:m-28 3xl:mx-96">
		<div>
			<h2 class="text-3xl font-bold text-center my-8">Minecraft TPS</h2>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:m-4">
			{#each Object.keys(status.minecraft).filter(id => id !== 'proxy') as id (id)}
				<TpsChart service={status.minecraft[id]} {id} />
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
			<PlayerCountChart services={status.minecraft} />
		</div>
	</section>
	<section class="m-4 xl:m-12 2xl:m-28 3xl:mx-96">
		<div class="text-center">
			<div
				class="bg-primary shadow-2xl rounded-full inline-block py-2 px-4 text-xs bg-opacity-25"
			>
				<!-- hover:bg-opacity-100 transition duration-300 ease-in-out -->
				Refreshing in {refreshIn} seconds
			</div>
		</div>
	</section>
</div>
