
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				resurrection: {
					primary: '#E935C1',
					secondary: '#7C3AED',
					accent: '#F59E0B',
					muted: '#1E1B4B',
					background: '#0C0A1E',
					foreground: '#FEFEFE',
				},
				divine: {
					purple: '#A855F7',
					'purple-dark': '#6B21A8',
					'purple-light': '#DDD6FE',
					accent: '#F59E0B',
					cosmic: '#1E1B4B',
					mystical: '#312E81',
					ethereal: '#C084FC',
					celestial: '#FBBF24',
					nebula: '#EC4899',
					starlight: '#F3E8FF'
				},
				cosmic: {
					50: '#F8FAFF',
					100: '#EEF2FF',
					200: '#E0E7FF',
					300: '#C7D2FE',
					400: '#A78BFA',
					500: '#8B5CF6',
					600: '#7C3AED',
					700: '#6D28D9',
					800: '#5B21B6',
					900: '#4C1D95',
					950: '#2E1065'
				},
				gold: {
					50: '#FFFBEB',
					100: '#FEF3C7',
					200: '#FDE68A',
					300: '#FCD34D',
					400: '#FBBF24',
					500: '#F59E0B',
					600: '#D97706',
					700: '#B45309',
					800: '#92400E',
					900: '#78350F',
					950: '#451A03'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'3xl': '1.5rem'
			},
			backgroundSize: {
				'300%': '300%',
			},
			scale: {
				'102': '1.02',
				'98': '0.98',
			},
			blur: {
				'3xl': '64px',
			},
			perspective: {
				'1000': '1000px',
				'2000': '2000px',
			},
			transformStyle: {
				'preserve-3d': 'preserve-3d',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1'
					},
					'100%': {
						opacity: '0'
					}
				},
				'slide-up': {
					'0%': {
						transform: 'translateY(20px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'slide-down': {
					'0%': {
						transform: 'translateY(-20px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.7'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'spin-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'particles': {
					'0%': {
						transform: 'translate(0, 0)',
						opacity: '0'
					},
					'50%': {
						opacity: '0.8'
					},
					'100%': {
						transform: 'translate(var(--random-x), var(--random-y))',
						opacity: '0'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px rgba(123, 92, 246, 0.8), 0 0 10px rgba(123, 92, 246, 0.5)'
					},
					'50%': {
						boxShadow: '0 0 20px rgba(123, 92, 246, 0.8), 0 0 30px rgba(123, 92, 246, 0.5)'
					}
				},
				'text-shimmer': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'100%': {
						backgroundPosition: '100% 50%'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-in-out',
				'fade-out': 'fade-out 0.6s ease-in-out',
				'slide-up': 'slide-up 0.6s ease-in-out',
				'slide-down': 'slide-down 0.6s ease-in-out',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'spin-slow': 'spin-slow 10s linear infinite',
				'particles': 'particles 5s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'text-shimmer': 'text-shimmer 3s linear infinite'
			},
			fontFamily: {
				serif: ['Cormorant Garamond', 'serif'],
				sans: ['Inter', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'text-gradient': 'linear-gradient(90deg, #F59E0B, #E935C1, #7C3AED, #A855F7)',
				'cosmic-gradient': 'linear-gradient(135deg, #0C0A1E 0%, #1E1B4B 25%, #312E81 50%, #4C1D95 75%, #2E1065 100%)',
				'divine-gradient': 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.3) 0%, rgba(124, 58, 237, 0.2) 40%, rgba(12, 10, 30, 1) 100%)',
				'aurora': 'linear-gradient(45deg, #E935C1, #F59E0B, #7C3AED, #A855F7, #EC4899)',
			},
			transitionDuration: {
				'2000': '2000ms',
				'3000': '3000ms',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
