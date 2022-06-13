<script>
	export let services;
	import { onMount } from "svelte";

	let canvas;

	const total = (services) => Object.keys(services).reduce((t, id) => t + services[id].player_count || 0, 0);

	onMount(async () => {
		const { Chart, registerables } = await import("chart.js");
		Chart.register(...registerables);
		Chart.defaults.color = "white";
		Chart.defaults.borderColor = "rgba(0, 0, 0, 0.1)";
		const ctx = canvas.getContext("2d");
		const chart = new Chart(ctx, {
			type: "line",
			data: {
				labels: ["7", "8", "9", "10", "11", "12th June", "Today"],
				datasets: [
					{
						label: "Total",
						data: [5, 3, 1, 4, 7, 12, 8, 5],
						backgroundColor: "rgba(102, 170, 68, 0.1)",
						borderColor: "rgba(102, 170, 68, 0.8)",
						borderWidth: 2,
						fill: true,
						tension: 0.1,
					},
					{
						label: "Hub",
						data: [0, 0, 0, 0, 0, 0, 0, 0],
						backgroundColor: "rgba(255, 0, 170, 0.1)",
						borderColor: "rgba(255, 0, 170, 0.8)",
						borderWidth: 2,
						fill: true,
						tension: 0.1,
					},
					{
						label: "Survival",
						data: [5, 2, 1, 4, 5, 5, 8, 5],
						backgroundColor: "rgba(255, 191, 0, 0.1)",
						borderColor: "rgba(255, 191, 0, 0.8)",
						borderWidth: 2,
						fill: true,
						tension: 0.1,
					},
					{
						label: "Creative",
						data: [0, 1, 0, 0, 2, 2, 0, 0],
						backgroundColor: "rgba(0, 255, 0, 0.1)",
						borderColor: "rgba(0, 255, 0, 0.8)",
						borderWidth: 2,
						fill: true,
						tension: 0.1,
					},
					{
						label: "Party Games",
						data: [0, 0, 0, 0, 0, 4, 0, 0],
						backgroundColor: "rgba(0, 255, 255, 0.1)",
						borderColor: "rgba(0, 255, 255, 0.8)",
						borderWidth: 2,
						fill: true,
						tension: 0.1,
					},
				],
			},
			options: {
				interaction: {
					intersect: false,
					mode: "index",
				},
				maintainAspectRatio: true,
				elements: {
					point: {
						radius: 2,
						hitRadius: 5,
					},
				},
				scales: {
					y: { beginAtZero: false },
				},
			},
		});
	});
</script>

<div class="text-center">
	<p class="bg-dark rounded-full inline-block py-1 px-3 mb-4 text-sm">
		{total(services)}<span class="text-gray-300">/50</span>
		online
	</p>
	<canvas bind:this={canvas} id="player-count" width="100%" height="50" />
</div>
