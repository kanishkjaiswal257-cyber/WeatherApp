import { getWeatherInfo } from "./CurrentWeather";

function DailyForecast({ weather, unit }) {
  const daily = weather.daily;

  return (
    <section className="forecast-section">
      <h2>7-Day Forecast</h2>

      <div className="daily-container">
        {daily.time.map((dateString, index) => {
          const date = new Date(dateString);

          const maxTemp =
            unit === "C"
              ? daily.temperature_2m_max[index]
              : (daily.temperature_2m_max[index] * 9) / 5 + 32;

          const minTemp =
            unit === "C"
              ? daily.temperature_2m_min[index]
              : (daily.temperature_2m_min[index] * 9) / 5 + 32;

          const info = getWeatherInfo(
            daily.weather_code[index],
            true
          );

          return (
            <div className="day-card" key={dateString}>
              <div className="day-name">
                {index === 0
                  ? "Today"
                  : date.toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
              </div>

              <div className="day-icon">
                {info.icon}
              </div>

              <p>{info.text}</p>

              <div className="day-temperature">
                <strong>
                  {Math.round(maxTemp)}°
                </strong>

                <span>
                  {Math.round(minTemp)}°
                </span>
              </div>

              <small>
                💧 {daily.precipitation_probability_max[index]}%
              </small>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default DailyForecast;