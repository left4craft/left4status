<script>
	export let service;
	export let id;
	import { onMount } from "svelte";
	import statuses from '$lib/statuses';

	let canvas;

	onMount(async () => {
		const { Chart, registerables } = await import("chart.js");
		Chart.register(...registerables);
		Chart.defaults.color = "white";
		Chart.defaults.borderColor = "rgba(0, 0, 0, 0.1)";
		const ctx = canvas.getContext("2d");
		const chart = new Chart(ctx, {
			type: "line",
			data: {
				labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
				datasets: [
					{
						label: "TPS",
						data: [12, 19, 3, 5, 2, 3],
						backgroundColor: "rgba(102, 170, 68, 0.1)",
						borderColor: "rgba(102, 170, 68, 0.8)",
						borderWidth: 2,
						fill: true,
						tension: 0.1,
					},
				],
			},
			options: {
				maintainAspectRatio: true,
				interaction: {
					intersect: false,
					mode: "index",
				},
				elements: {
					point: {
						radius: 2,
						hitRadius: 5
					},
				},
				scales: {
					y: { beginAtZero: true },
				},
			},
		});
	});

	const tpsColour = tps => statuses[tps >= 19 ? 'online' : tps >=15 ? 'degraded' : tps >=10 ? 'minor' : 'major'].textColour
</script>

<div class="dark:bg-light shadow-2xl p-5 rounded-lg">
	<h3>
		<span class="font-semibold">{service.name}</span>
		-
		<span class="{tpsColour(service.tps)}">{service.tps.toFixed(2)} TPS</span>
	</h3>
	<canvas bind:this={canvas} id="{id}-tps" width="100%" height="50" />
</div>
