export function beautify(input) {
	return input
		.replace(/_/g, ' ')
		.replace(/(^|\s)(\w)/g, c => c.toUpperCase());
}