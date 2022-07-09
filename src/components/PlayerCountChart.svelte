<script>
	export let services;
	import { onMount } from "svelte";
	import "chartjs-adapter-date-fns";

	const colours = [
		"255, 0, 170",
		"255, 191, 0",
		"0, 255, 0",
		"0, 255, 255",
		"255, 255, 255", // 102, 170, 68
	];

	let canvas;
	let datasets = services.map((service, i) => ({
		label: service.display_name,
		data: service.history.players.map((obj) => ({
			x: obj.time,
			y: obj.value,
		})),
		backgroundColor: `rgba(${colours[i]},0.1)`,
		borderColor: `rgba(${colours[i]}, 0.8)`,
		borderWidth: 2,
		fill: true,
		tension: 0.1,
		stepped: true	
	}));

	onMount(async () => {
		const { Chart, registerables } = await import("chart.js");
		const { en } = await import("date-fns/locale");
		Chart.register(...registerables);
		Chart.defaults.color = "white";
		Chart.defaults.borderColor = "rgba(0, 0, 0, 0.1)";
		const ctx = canvas.getContext("2d");
		const chart = new Chart(ctx, {
			type: "line",
			data: { datasets },
			options: {
				interaction: {
					intersect: false,
					mode: "index",
				},
				maintainAspectRatio: false,
				elements: {
					point: {
						radius: 2,
						hitRadius: 5,
					},
				},
				parsing: false,
				scales: {
					x: {
						adapters: {
							date: {
								locale: en,
							},
						},
						type: "time",
						time: {
							// unit: "hour",
						},
						ticks: {
							source: "auto",
							maxRotation: 0,
							autoSkip: true,
						},
					},
					y: { beginAtZero: true },
				},
			},
		});
	});
</script>

<div class="text-center">
	<p class="bg-dark rounded-full inline-block py-1 px-3 mb-4">
		<span class="font-semibold">{services.find(s => s.type === 'bungee').status.players}</span>
		<span class="text-gray-300">players online</span>
	</p>
	<div
		class="chart-container relative h-56 sm:h-64 md:h-72 2xl:h-96 w-full"
	>
		<canvas bind:this={canvas} id="player-count" />
	</div>

	
</div>
