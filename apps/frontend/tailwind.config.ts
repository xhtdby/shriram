import type { Config } from 'tailwindcss'
import preset from '@shadcn/ui/preset'

const config: Config = {
  presets: [preset],
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
}
export default config
