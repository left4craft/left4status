<script>
	import "../app.css";
	import Navbar from "../components/Navbar.svelte";
	import statuses from "$lib/statuses";
	import { beautify } from "../lib/strings";

	const status = {
		overall: 'major',
		minecraft: {
			proxy: {
				status: "online",
				history: [0, 0, 0, 4, 0, 17, 0, 0, 2, 1, 0],
			},
			hub: {
				status: "online",
				history: [0, 0, 0, 4, 0, 17, 0, 0, 2, 1, 0],
			},
			survival: {
				status: "online",
				history: [0, 0, 0, 4, 0, 17, 0, 0, 2, 1, 0],
			},
			creative: {
				status: "online",
				history: [0, 0, 0, 4, 0, 17, 0, 0, 2, 1, 0],
			},
			party_games: {
				status: "online",
				history: [0, 0, 0, 4, 0, 17, 0, 0, 2, 1, 0],
			},
		},
		websites: {},
	};
	const stats = {
		hub: {
			player_count: 0,
			tps: 20,
		},
		survival: {
			player_count: 3,
			tps: 19.9,
		},
		creative: {
			player_count: 1,
			tps: 20,
		},
		party_games: {
			player_count: 0,
			tps: 20,
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
	<section class="m-4 xl:m-12 2xl:m-28 3xl:mx-96">
		<div class="block sm:mx-32 mb-16">
			<div
				class="{statuses[status.overall].bgColour} dark:bg-opacity-10 {statuses[status.overall].borderColour} border-2 p-5 rounded-lg text-center shadow-2xl flex-initial"
			>
				<h3 class="{statuses[status.overall].textColour} text-xl font-bold pb-2">
					<i class="{statuses[status.overall].icon} fa-xl"></i>
					<br>
					{statuses[status.overall].title}
				</h3>
				<p>
					Some services are suffering from degraded performance.
					<br />
					<a
						href="https://l4c.link/discord"
						class="font-bold hover:underline"
						target="_blank">Join the Discord server</a
					> for updates.
				</p>
			</div>
		</div>
	</section>
	<section class="m-4 xl:m-12 2xl:m-28 3xl:mx-96">
		<div>
			<h2 class="text-3xl font-bold text-center my-8">Status</h2>
		</div>
		<div class="block dark:bg-light shadow-2xl my-8 sm:m-4 p-5 rounded-lg">
			<div class="text-xl font-semibold">Minecraft</div>
			{#each Object.keys(status.minecraft) as name (name)}
				<div class="p-4">
					<h3>
						<span class="font-semibold">{beautify(name)}</span>
						-
						<span class="{statuses[status.minecraft[name].status].textColour}">{status.minecraft[name].status}</span>
					</h3>
					{#each status.minecraft[name].history as mins}
						<span class="p-1">{mins}</span>
					{/each}
				</div>
			{/each}
		</div>

		<div class="block dark:bg-light shadow-2xl my-8 sm:m-4 p-5 rounded-lg">
			<div class="text-xl font-semibold">Websites</div>
		</div>
	</section>
	<section class="m-4 xl:m-12 2xl:m-28 3xl:mx-96">
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
	<section class="m-4 xl:m-12 2xl:m-28 3xl:mx-96">
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
