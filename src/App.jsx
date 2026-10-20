import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import RecentSearches from "./components/RecentSearches";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";

import {
  getCoordinates,
  getWeather,
} from "./services/weatherApi";

function App() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [unit, setUnit] = useState("C");

  const [recentSearches, setRecentSearches] =
    useState(() => {
      try {
        return JSON.parse(
          localStorage.getItem("recentSearches")
        ) || [];
      } catch {
        return [];
      }
    });

  const searchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");

      const coordinates = await getCoordinates(city);

      const weatherData = await getWeather(
        coordinates.latitude,
        coordinates.longitude
      );

      setLocation(coordinates);
      setWeather(weatherData);

      setRecentSearches((previous) => {
        const updated = [
          city,
          ...previous.filter(
            (item) =>
              item.toLowerCase() !== city.toLowerCase()
          ),
        ].slice(0, 6);

        localStorage.setItem(
          "recentSearches",
          JSON.stringify(updated)
        );

        return updated;
      });
    } catch (err) {
      setError(
        err.message ||
          "Unable to fetch weather information."
      );
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    localStorage.removeItem("recentSearches");
    setRecentSearches([]);
  };

  useEffect(() => {
    searchWeather("Kanpur");
  }, []);

  const getBackgroundClass = () => {
    if (!weather) {
      return "default-weather";
    }

    const code = weather.current.weather_code;

    if (code === 0) {
      return "clear-weather";
    }

    if ([1, 2, 3].includes(code)) {
      return "cloudy-weather";
    }

    if ([45, 48].includes(code)) {
      return "fog-weather";
    }

    if (
      [51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)
    ) {
      return "rain-weather";
    }

    if ([95, 96, 99].includes(code)) {
      return "storm-weather";
    }

    if ([71, 73, 75, 77].includes(code)) {
      return "snow-weather";
    }

    return "default-weather";
  };

  return (
    <div className={`app ${getBackgroundClass()}`}>
      <Navbar />

      <main className="container">
        <div className="hero">
          <h1>Weather Forecast</h1>

          <p>
            Get real-time weather information for any
            city around the world.
          </p>
        </div>

        <SearchBar
          onSearch={searchWeather}
          loading={loading}
        />

        <div className="unit-toggle">
          <button
            className={unit === "C" ? "active" : ""}
            onClick={() => setUnit("C")}
          >
            °C
          </button>

          <button
            className={unit === "F" ? "active" : ""}
            onClick={() => setUnit("F")}
          >
            °F
          </button>
        </div>

        {loading && <Loading />}

        {error && !loading && (
          <ErrorMessage message={error} />
        )}

        {weather && location && !loading && !error && (
          <>
            <CurrentWeather
              location={location}
              weather={weather}
              unit={unit}
            />

            <WeatherDetails
              weather={weather}
              unit={unit}
            />

            <HourlyForecast
              weather={weather}
              unit={unit}
            />

            <DailyForecast
              weather={weather}
              unit={unit}
            />
          </>
        )}

        <RecentSearches
          searches={recentSearches}
          onSelect={searchWeather}
          onClear={clearHistory}
        />
      </main>

      <footer>
        <p>
          Weather App • Powered by Open-Meteo
        </p>
      </footer>
    </div>
  );
}

export default App;