module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary)',
				'primary-dark': 'var(--primary-dark)',
				'primary-light': 'var(--primary-light)',
			},
		},
	},
	plugins: [],
}
