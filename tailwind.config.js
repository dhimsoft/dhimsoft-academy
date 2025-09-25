module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "doe-blue": "#003366",       // Navbar Dark Blue
        "doe-hero-blue": "#0a3d91",  // Hero Section Blue
        "doe-yellow": "#ffd600",     // Accent Yellow
      },
    },
  },
  plugins: [],
};
