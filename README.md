# 🌤️ Weather App

A modern, responsive, and beautiful weather application built with **React 19** and **Vite**, powered by the free and open-source **Open-Meteo API**. Get real-time forecasts, hourly updates, 7-day outlooks, and dynamic weather-themed backgrounds for any city across the globe.

---

## ✨ Features

- 🌍 **Global City Search**: Search for any city worldwide using Open-Meteo Geocoding.
- 🌡️ **Dynamic Unit Switching**: Seamlessly toggle between Celsius (°C) and Fahrenheit (°F).
- 🕒 **Hourly Forecast**: Check upcoming temperatures and weather conditions hour by hour.
- 📅 **7-Day Forecast**: Plan ahead with multi-day high and low forecasts.
- 💧 **Comprehensive Weather Metrics**: View apparent temperature, humidity, wind speed, precipitation, pressure, and more.
- 🎨 **Dynamic Atmosphere & Backgrounds**: The UI theme dynamically changes based on current conditions (Clear, Clouds, Rain, Snow, Fog, Thunderstorm).
- 🕒 **Recent Search History**: Persisted in local storage for quick one-click access to frequently viewed cities.
- ⚡ **Blazing Fast**: Powered by Vite and React 19 for instantaneous updates and smooth animations.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid, Glassmorphism, Micro-animations)
- **API**: [Open-Meteo Free Weather API](https://open-meteo.com/) (No API key required)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` or `yarn` / `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kanishkjaiswal257-cyber/WeatherApp.git
   cd WeatherApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173` to explore the app!

---

## 📦 Production Build

To build the project for production:

```bash
npm run build
```

The optimized static assets will be output to the `dist` directory. You can preview the production build locally with:

```bash
npm run preview
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
