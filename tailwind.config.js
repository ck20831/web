module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js" // If you're using Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // If you're using Flowbite
  ],
}
