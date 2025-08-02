/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backdropBlur: {
				sm: '4px',
			  },
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'spin-slower': {
					to: { transform: 'rotate(360deg)' },
				}
			},
			animation: {
				'bounce-slow': 'bounce 3s infinite',
				'pulse-slow': 'pulse 4s infinite',
				'spin-slower': 'spin-slower 8s linear infinite',
				'float': 'float 4s infinite ease-in-out'
			}
		  },
		},
	plugins: [require('tailwind-scrollbar')],
}
