module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#159C7D',
        'gray-primary': '#FAFAFA',
        'black-body': '#797979',
      },
      boxShadow: {
        'form': '4px 4px 20px 10px rgba(0, 0, 0, 0.06)'
      },
      maxWidth: {
        '441px': '441px',
        '380px': '380px'
      },
      height: {
        '100vh': '100vh'
      }
    },
  },
  plugins: [],
}
