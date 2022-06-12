module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	plugins: [],
	theme: {
		extend: {
			colors: {
				blurple: '#5865F2',
				dark: '#2e2e2e',
				darker: '#212121',
				light: '#505050',
				/*
				 * primary: '#4caf50',
				 * secondary: '#66aa44'
				 */
				primary: '#66aa44'
			},
			screens: { '3xl': '2160px' }
		}
	},
	variants: {}
};