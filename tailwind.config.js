module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('background.svg')",
        'coverbr': "url('coverbr.jpg')",
      }
    },
  },
  plugins: [],
}
