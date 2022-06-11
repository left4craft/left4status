<script>
	import "../app.css";
	import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />

<div class="dark:text-white lg:mx-40 2xl:mx-96 ">
	<section class="m-4 xl:m-12 2xl:m-28 3xl:mx-96">
		<div class="block sm:mx-32 mb-16">
			<div
				class="dark:bg-yellow-400 dark:bg-opacity-10 dark:border-yellow-400 border-2 p-5 rounded-lg text-center shadow-2xl flex-initial"
			>
				<h3 class="text-yellow-400 text-xl font-bold pb-2">
					Degraded Performance
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
				Refreshing in <span>...</span> seconds
			</div>
		</div>
	</section>
</div>
