import type { Config } from "tailwindcss"

export default <Partial<Config>>{
  content: [
    "./app.vue",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./data/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#e60012",
          dark: "#9f1420",
          ink: "#171b21",
          graphite: "#242b34",
          steel: "#596778",
          silver: "#eef2f5"
        }
      },
      boxShadow: {
        steel: "0 18px 44px rgba(23, 27, 33, .12)"
      }
    }
  }
}
