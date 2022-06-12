<script>
	import "../app.css";
	import Navbar from "../components/Navbar.svelte";
	import Summary from "../components/Summary.svelte";
	import ServiceStatus from "../components/ServiceStatus.svelte";

	const status = {
		overall: "online",
		minecraft: {
			proxy: {
				status: "online",
				history: new Array(60)
					.fill(0)
					.map(() => Math.floor(Math.random() * 5)),
			},
			hub: {
				status: "online",
				history: [],
				player_count: 0,
				tps: 20,
			},
			survival: {
				status: "online",
				history: [],
				player_count: 3,
				tps: 19.9,
			},
			creative: {
				status: "online",
				history: [],
				player_count: 1,
				tps: 20,
			},
			party_games: {
				status: "online",
				history: [],
				player_count: 0,
				tps: 20,
			},
		},
		websites: {},
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
			<div class="text-xl font-semibold">Minecraft</div>
			{#each Object.keys(status.minecraft) as name (name)}
				<div class="p-4">
					<ServiceStatus {status} {name} />
				</div>
			{/each}
		</div>

		<div
			id="websites-status"
			class="block dark:bg-light shadow-2xl my-8 sm:m-4 p-5 rounded-lg"
		>
			<div class="text-xl font-semibold">Websites</div>
		</div>
	</section>
	<section id="tps" class="m-4 xl:m-12 2xl:m-28 3xl:mx-96">
		<div>
			<h2 class="text-3xl font-bold text-center my-8">Minecraft TPS</h2>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:m-4">
			<div class="dark:bg-light shadow-2xl p-5 rounded-lg">
				<h3 class="font-semibold">Hub</h3>
			</div>
			<div class="dark:bg-light shadow-2xl p-5 rounded-lg">
				<h3 class="font-semibold">Survival</h3>
			</div>
			<div class="dark:bg-light shadow-2xl p-5 rounded-lg">
				<h3 class="font-semibold">Creative</h3>
			</div>
			<div class="dark:bg-light shadow-2xl p-5 rounded-lg">
				<h3 class="font-semibold">PartyGames</h3>
			</div>
		</div>
	</section>
	<section id="player-count" class="m-4 xl:m-12 2xl:m-28 3xl:mx-96">
		<div>
			<h2 class="text-3xl font-bold text-center my-8">
				Minecraft Player Count
			</h2>
		</div>
		<div class="dark:bg-light shadow-2xl my-8 sm:m-4 p-5 rounded-lg" />
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
