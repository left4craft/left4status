<script>
	import "../app.css";
	import Navbar from "../components/Navbar.svelte";
	import Error from "../components/Error.svelte";
	import StatusPage from "../components/StatusPage.svelte";
	import Loader from "../components/Loader.svelte";
	import { secsToMins } from "$lib/statuses";

	let error = null;
	let ready = false;
	let status = [];
	let age = 0;

	const update = async () => {
		try {
			error = null;
			let response = await fetch("https://statusapi.l4c.link/history");
			if (!response.ok) {
				error = "Response code " + response.status;
				ready = true;
				return;
			}
			let body = await response.json();
			age =
				Math.floor(
					body.cached &&
						(Date.now() - body.cached_timestamp) / 1000 / 60
				) || 0; // cache age in mins
			status = Object.keys(body.servers)
				.filter((key) => typeof body.servers[key] === "object") // don't include cache data
				// .reduce((obj, key) => (obj[key] = body.servers[key], obj), {});
				.map((key) => {
					let data = body.servers[key];
					data._state = !data.status.online
						? "major"
						: data.status.tps && data.status.tps < 18
						? "degraded"
						: "online";
					data.history.online = data.history.online.map((ms) =>
						Math.round(ms / 1000 / 60)
					); // convert ms to mins
					return data;
				});
			ready = true;
		} catch (err) {
			ready = true;
			error = err;
		}
	};

	update();

	const interval = 300;
	let updating = false;
	let refreshIn = interval;
	setInterval(async () => {
		refreshIn--;
		if (refreshIn === 0) {
			updating = true;
			await update();
			await new Promise((res) => setTimeout(() => res(), 1000));
			refreshIn = interval;
			updating = false;
		}
	}, 1000);
</script>

<Navbar />

<div class="dark:text-white lg:mx-40 2xl:mx-64 4xl:mx-96 ">
	<noscript>
		<p class="text-red-400 text-3xl font-bold pb-2 text-center">
			Please enable JavaScript to use this website.
		</p>
	</noscript>

	{#if !ready}
		<section>
			<div class="flex flex-row my-36 justify-center items-center">
				<Loader />
			</div>
		</section>
	{:else if error}
		<Error {error} />
	{:else}
		<StatusPage {age} {status} />
		<section class="m-4 xl:m-12 2xl:m-28 3xl:mx-64">
			<div class="text-center">
				<div
					class="bg-primary shadow-2xl rounded-full inline-block py-2 px-4 text-xs bg-opacity-25"
				>
					{#if updating}
						Refreshing...
					{:else}
						Refreshing in {secsToMins(refreshIn)}
					{/if}
				</div>
			</div>
		</section>
	{/if}
</div>
