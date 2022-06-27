<script>
	export let service;
	import { onMount } from "svelte";
	import statuses from "$lib/statuses";
	import "chartjs-adapter-date-fns";

	let canvas;
	let data = service.history.tps.map((obj) => ({
			x: new Date(obj.time).getTime(),
			y: obj.value,
		}));

	onMount(async () => {
		const { Chart, registerables } = await import("chart.js");
		const { en } = await import("date-fns/locale");
		Chart.register(...registerables);
		Chart.defaults.color = "white";
		Chart.defaults.borderColor = "rgba(0, 0, 0, 0.1)";
		const ctx = canvas.getContext("2d");
		
		new Chart(ctx, {
			type: "line",
			data: {
				datasets: [
					{
						label: "TPS",
						data,
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
						hitRadius: 5,
					},
				},
				parsing: false,
				// plugins: {
				// 	decimation: {
				// 		algorithm: "lttb",
				// 		enabled: true,
				// 		samples: 70,
				// 	},
				// },
				scales: {
					x: {
						adapters: {
							date: {
								locale: en,
							},
						},
						type: "time",
						time: {
							unit: "hour",
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

	const tpsColour = (tps) =>
		statuses[
			tps >= 19
				? "online"
				: tps >= 18
				? "degraded"
				: tps >= 10
				? "minor"
				: "major"
		].textColour;
</script>

<div class="dark:bg-light shadow-2xl p-5 rounded-lg">
	<h3>
		<span class="font-semibold">{service.display_name}</span>
		-
		<span class={tpsColour(service.status.tps)}
			>{service.status.tps.toFixed(2)} TPS</span
		>
	</h3>
	<canvas bind:this={canvas} id="{service.id}-tps" width="100%" height="50" />
</div>
