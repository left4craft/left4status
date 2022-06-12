<script>
	export let service;
	import statuses, { getUptime } from "$lib/statuses";
	import { beautify } from "$lib/strings";
	import ServiceStatusHistory from "./ServiceStatusHistory.svelte";
</script>

<h3>
	<span class="font-semibold">{service.name}</span>
	-
	<span class={statuses[service.status].textColour}>
		{statuses[service.status].name.toLowerCase()}
	</span>
	<span class="text-gray-300">
		{getUptime(service.history)}%
		</span>
</h3>
<ServiceStatusHistory {service} />
