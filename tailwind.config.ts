import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		backgroundImage: {
			'cover-aida': "url('/images/coverAida.png')",
			'skillcard-branding-img': "url('/images/bloc-branding.jpg')",
			'skillcard-ui-img': "url('/images/bloc-ui.jpg')",
			'skillcard-ux-img': "url('/images/bloc-ux.jpg')"
		},
		spacing: {
			'42': '10.5rem', // Add custom spacing for top-42 (42 * 0.25rem = 10.5rem)
			'38': '9.5rem',
			'22': '5.5rem',
			'18':'4.5rem'
		  },
		fontFamily:{
			'clash-display': ['var(--font-clash-display)']
		},
		rotate: {
			'4': '4deg',
			'5': '5deg',
			'6': '6deg',
			'7': '7deg',
			'8': '8deg',
			'9': '9deg',
		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: '#FFFDF6',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
			badge: {
				DEFAULT: '#F4EDD8'
			},
  			secondary: {
  				DEFAULT: '#2F1834',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
			violet: {
				DEFAULT: '#B36CF2'
			},
			violetBeta: {
				DEFAULT: '#9747FF'
			},
			orange: {
				DEFAULT: '#FF4800'
			},
			rose: {
				DEFAULT: '#FE7AA8'
			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: {
				DEFAULT: '#5D2C68'
			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
			xs: '2px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  transitionProperty: {
			'width': 'width',
			'spacing': 'margin, padding',
		  },
		keyframes: {
			"expand": {
				'0%': { width: 'w-72' },
				'100%': { with: 'w-96' },
			  },
		},
		animation: {
			"expand": 'expand 1s ease-in-out',
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
