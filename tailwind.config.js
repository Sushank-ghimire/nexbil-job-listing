/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff", // White background for primary
        secondary: "#f7f7f7", // Light Gray for secondary background
        textPrimary: "#1a1a1a", // Dark Gray/Black text

        // Accent colors
        accent: "#007bff", // Blue for primary buttons/links
        warning: "#ffcc00", // Soft Yellow for warning
        error: "#ff4d4f", // Bright Red for errors
        success: "#28a745", // Green for success

        // Neutral colors
        neutral: "#f0f0f0", // Muted Gray for neutral elements
        darkPrimary: "#1a1a1a", // Dark Gray background for dark mode
        darkSecondary: "#333333", // Charcoal Gray for secondary dark mode
        darkTextPrimary: "#ffffff", // White text in dark mode
        darkAccent: "#007bff", // Bright Blue accent in dark mode
        darkWarning: "#ffcc00", // Soft Yellow warning in dark mode
        darkError: "#ff4d4f", // Bright Red error in dark mode
        darkSuccess: "#28a745", // Green success in dark mode
        darkNeutral: "#404040", // Gray background for neutral dark mode
      },
    },
  },
  plugins: [],
};
