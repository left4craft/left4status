export default {
	degraded: {
		bgColour: 'bg-yellow-400',
		borderColour: 'border-yellow-400',
		description: 'Some services are suffering from degraded performance.',
		// icon: 'fa-solid fa-turtle',
		icon: 'fa-solid fa-triangle-exclamation',
		textColour: 'text-yellow-400',
		title: 'Degraded Performance'
	},
	major: {
		bgColour: 'bg-red-400',
		borderColour: 'border-red-400',
		description: 'There is a major disruption to service operation.',
		icon: 'fa-solid fa-xmark',
		textColour: 'text-red-400',
		title: 'Major Outage'
	},
	minor: {
		bgColour: 'bg-orange-400',
		borderColour: 'border-orange-400',
		description: 'Some services are offline.',
		icon: 'fa-solid fa-triangle-exclamation',
		textColour: 'text-orange-400',
		title: 'Minor Outage'
	},
	online: {
		bgColour: 'bg-green-400',
		borderColour: 'border-green-400',
		description: 'All services are operating normally.',
		icon: 'fa-solid fa-check',
		textColour: 'text-green-400',
		title: 'Operational'
	}
};