/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://static.eldiario.es/clip/a945cf1e-14f3-406a-b0ad-264868272957_16-9-discover-aspect-ratio_default_0.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",}
    },
  },
  plugins: [],
}