module.exports = {
	mode: 'jit',
	purge: ['src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				techno: ['"Press Start 2P"', 'sans-serif']
			}
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		}
	},
	plugins: []
};
