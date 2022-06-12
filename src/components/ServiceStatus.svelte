<script>
	export let status;
	export let name;
	import statuses, { getUptime } from "$lib/statuses";
	import { beautify } from "$lib/strings";
	import ServiceStatusHistory from "./ServiceStatusHistory.svelte";
</script>

<h3>
	<span class="font-semibold">{beautify(name)}</span>
	-
	<span class={statuses[status.minecraft[name].status].textColour}>
		{statuses[status.minecraft[name].status].title.toLowerCase()}
	</span>
	<span class="text-gray-300">
		{getUptime(status.minecraft[name].history)}%
		</span>
</h3>
<ServiceStatusHistory {status} {name} />
