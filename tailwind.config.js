import { heroui } from '@heroui/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#47d1ca',
				secondary: '#feb128',
				success: '#86cc6d',
				warning: '#fd925a',
				danger: '#d3007e',
				default: '#6c757d',
			},
		},
	},
	darkMode: 'class',
	plugins: [heroui()],
}
