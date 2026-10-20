function getWeatherInfo(code, isDay) {
    if (code === 0) {
        return {
            icon: isDay ? "☀️" : "🌙",
            text: "Clear Sky",
        };
    }

    if ([1, 2].includes(code)) {
        return {
            icon: isDay ? "🌤️" : "☁️",
            text: "Partly Cloudy",
        };
    }

    if (code === 3) {
        return {
            icon: "☁️",
            text: "Overcast",
        };
    }

    if ([45, 48].includes(code)) {
        return {
            icon: "🌫️",
            text: "Fog",
        };
    }

    if ([51, 53, 55].includes(code)) {
        return {
            icon: "🌦️",
            text: "Drizzle",
        };
    }

    if ([61, 63, 65].includes(code)) {
        return {
            icon: "🌧️",
            text: "Rain",
        };
    }

    if ([71, 73, 75, 77].includes(code)) {
        return {
            icon: "❄️",
            text: "Snow",
        };
    }

    if ([80, 81, 82].includes(code)) {
        return {
            icon: "🌧️",
            text: "Rain Showers",
        };
    }

    if ([95, 96, 99].includes(code)) {
        return {
            icon: "⛈️",
            text: "Thunderstorm",
        };
    }

    return {
        icon: "🌡️",
        text: "Unknown",
    };
}

function CurrentWeather({ location, weather, unit }) {
    const current = weather.current;

    const weatherInfo = getWeatherInfo(
        current.weather_code,
        current.is_day
    );

    const temperature =
        unit === "C"
            ? current.temperature_2m
            : (current.temperature_2m * 9) / 5 + 32;

    const feelsLike =
        unit === "C"
            ? current.apparent_temperature
            : (current.apparent_temperature * 9) / 5 + 32;

    return (
        <section className="current-weather card">
            <div className="location-info">
                <h1>
                    {location.name}, {location.country_code}
                </h1>

                <p>
                    {location.admin1 || location.country}
                </p>
            </div>

            <div className="weather-main">
                <div className="weather-icon-large">
                    {weatherInfo.icon}
                </div>

                <div className="temperature">
                    <span>{Math.round(temperature)}</span>
                    <sup>°{unit}</sup>
                </div>
            </div>

            <h2 className="condition">
                {weatherInfo.text}
            </h2>

            <p className="feels-like">
                Feels like {Math.round(feelsLike)}°{unit}
            </p>

            <div className="updated">
                Updated:{" "}
                {new Date(current.time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </div>
        </section>
    );
}

export { getWeatherInfo };
export default CurrentWeather;