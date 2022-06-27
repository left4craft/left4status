<script>
	export let service;
	import statuses, { getUptime } from "$lib/statuses";
	import ServiceStatusHistory from "./ServiceStatusHistory.svelte";
</script>

<h3>
	<span class="font-semibold">{service.display_name}</span>
	-
	<span class={statuses[service._state].textColour}>
		{statuses[service._state].name.toLowerCase()}
	</span>
	<span class="text-gray-300 float-right">
		{getUptime(service.history.online)}%
	</span>
</h3>
<ServiceStatusHistory {service} />
