<script>
	import "../app.css";
	import Navbar from "../components/Navbar.svelte";
	import Summary from "../components/Summary.svelte";
	import statuses, {
		getDate,
		getUptime,
		minsToHours,
		statusFromMins,
	} from "$lib/statuses";
	import { beautify } from "$lib/strings";

	const status = {
		overall: "minor",
		minecraft: {
			proxy: {
				status: "online",
				history: new Array(60)
					.fill(0)
					.map(() => Math.floor(Math.random() * 20)),
			},
			hub: {
				status: "online",
				history: [],
			},
			survival: {
				status: "online",
				history: [],
			},
			creative: {
				status: "online",
				history: [],
			},
			party_games: {
				status: "online",
				history: [],
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
					<h3>
						<span class="font-semibold">{beautify(name)}</span>
						-
						<span
							class={statuses[status.minecraft[name].status]
								.textColour}
						>
							{statuses[
								status.minecraft[name].status
							].title.toLowerCase()}
						</span>
						<span class="text-gray-300">{getUptime(status.minecraft[name].history)}%</span>
					</h3>
					<div class="flex flex-row flex-nowrap gap-0.5">
						{#each status.minecraft[name].history as mins, i}
							<div
								class="flex-1 grow relative inline-block tooltip hover:cursor-pointer {statuses[
									statusFromMins(mins)
								].bgColour} h-8"
							>
								<div
									class="py-2 px-4 bg-darker w-48 rounded-md z-20 absolute right-0 invisible tooltip-item -translate-y-16 translate-x-16"
								>
									<p
										class="text-sm font-bold text-gray-100 pb-1"
									>
										{getDate(status.minecraft[name].history.length, i)}
									</p>
									<p
										class="text-xs leading-4 text-gray-200 pb-3"
									>
										Offline for {minsToHours(mins)}
									</p>
								</div>
							</div>
						{/each}
					</div>
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

<style>
	.tooltip:hover .tooltip-item {
		visibility: visible;
	}
</style>
