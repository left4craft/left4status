module.exports = {
	darkMode: 'class',
	plugins: [],
	purge: [
		'./public/**/*.html',
		'./public/**/*.js'
	],
	theme: {

		extend: {
			colors: {
				dark: '#2e2e2e',
				light: '#505050',
				/*
				 * primary: '#4caf50',
				 * secondary: '#66aa44'
				 */
				primary: '#66aa44'
			}
		}
	},
	variants: {}
};