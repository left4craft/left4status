<script>
	import "../app.css";
	import Navbar from "../components/Navbar.svelte";
	import Error from "../components/Error.svelte";
	import StatusPage from "../components/StatusPage.svelte";
	import Loader from "../components/Loader.svelte";

	let ready = false;
	let response = {};
	let status = [];
	let age = 0;

	const update = async () => {
		let start = Date.now();
		response = await fetch("https://statusapi.l4c.link/history");
		let body = response.ok && await response.json();

		age = Math.floor(body.cached && (Date.now() - body.cached_timestamp) / 1000 / 60) || 0; // cache age in mins

		status = Object.keys(body.servers)
			.filter(key => typeof body.servers[key] === 'object') // don't include cache data
			// .reduce((obj, key) => (obj[key] = body.servers[key], obj), {});
			.map(key => {
				let data = body.servers[key];
				data._state = !data.status.online
					? 'major' : data.status.tps && data.status.tps < 18
						? 'degraded' : 'online'
				data.history.online = data.history.online.map(ms => Math.round(ms / 1000 / 60)); // convert ms to mins
				return data;
			});

		if (ready) return;
		let end = Date.now();
		if (end - start < 2000) await new Promise((res) => setTimeout(() => res(), 1000));
		ready = true;
	};

	update();

	let updating = false;
	let refreshIn = 180;
	setInterval(async () => {
		refreshIn--;
		if (refreshIn === 0) {
			updating = true;
			await update();
			await new Promise((res) => setTimeout(() => res(), 1000));
			refreshIn = 180;
			updating = false;
		}
	}, 1000);
</script>

<Navbar />

<div class="dark:text-white lg:mx-40 2xl:mx-96 ">
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
	{:else if !response.ok}
		<Error {response} />
	{:else}
		<StatusPage {age} {status} />
		<section class="m-4 xl:m-12 2xl:m-28 3xl:mx-96">
			<div class="text-center">
				<div
					class="bg-primary shadow-2xl rounded-full inline-block py-2 px-4 text-xs bg-opacity-25"
				>
					{#if updating}
						Refreshing...
					{:else}
						Refreshing in {refreshIn} seconds
					{/if}
				</div>
			</div>
		</section>
	{/if}
</div>
