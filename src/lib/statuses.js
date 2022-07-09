import { browser } from '$app/env';

const statuses = {
	degraded: {
		bgColour: 'bg-yellow-400',
		bgColour2: 'hover:bg-yellow-200',
		borderColour: 'border-yellow-400',
		description: 'Some services are suffering from degraded performance.',
		// icon: 'fa-solid fa-turtle',
		icon: 'fa-solid fa-triangle-exclamation',
		name: 'Degraded', // for individual service status
		textColour: 'text-yellow-400',
		title: 'Degraded Performance' // for overall status
	},
	major: {
		bgColour: 'bg-red-400',
		bgColour2: 'hover:bg-red-200',
		borderColour: 'border-red-400',
		description: 'There is a major disruption to service operation.',
		icon: 'fa-solid fa-xmark',
		name: 'Offline',
		textColour: 'text-red-400',
		title: 'Major Outage'
	},
	minor: { // for overall status only - offline services should always be marked as `major`
		bgColour: 'bg-orange-400',
		bgColour2: 'hover:bg-orange-200',
		borderColour: 'border-orange-400',
		description: 'Some services are offline.',
		icon: 'fa-solid fa-triangle-exclamation',
		name: 'Offline',
		textColour: 'text-orange-400',
		title: 'Minor Outage'
	},
	online: {
		bgColour: 'bg-green-400',
		bgColour2: 'hover:bg-green-200',
		borderColour: 'border-green-400',
		description: 'All services are operating normally.',
		icon: 'fa-solid fa-check',
		name: 'Online',
		textColour: 'text-green-400',
		title: 'Online'
	}
};

export default statuses;

export const statusFromMins = mins => mins <= 5 ? 'online' : mins < 15 ? 'minor' : 'major';

export const minsToHours = mins => mins >= 60 ? `${Math.floor(mins / 60)}h ${mins % 60}m` : mins + 'm';

export const secsToMins = secs => secs > 60 ? `${Math.ceil(secs / 60)} minutes` : secs + ' seconds';

export const getDate = (l, i) => new Intl.DateTimeFormat(browser ? navigator.language : 'en-GB', {
	day: 'numeric',
	month: 'long',
	weekday: 'long',
	year: 'numeric'
}).format(new Date(Date.now() - ((l - i - 1) * 86400000)));

export const getUptime = days => {
	const total = 1440 * days.length;
	const offline = days.reduce((t, m) => t + m, 0);
	const online = total - offline;
	return (online / total * 100).toFixed(2);
};

export const getCombinedUptime = services => (services.map(days => getUptime(days)).reduce((acc, n) => acc + Number(n), 0) / services.length).toFixed(2);