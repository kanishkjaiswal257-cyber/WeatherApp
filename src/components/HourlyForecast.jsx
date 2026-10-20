import { getWeatherInfo } from "./CurrentWeather";

function HourlyForecast({ weather, unit }) {
  const hourly = weather.hourly;

  const currentTime = new Date(weather.current.time).getTime();

  const indexes = hourly.time
    .map((time, index) => ({
      index,
      time: new Date(time).getTime(),
    }))
    .filter((item) => item.time >= currentTime)
    .slice(0, 12);

  return (
    <section className="forecast-section">
      <h2>Hourly Forecast</h2>

      <div className="hourly-container">
        {indexes.map(({ index }) => {
          const date = new Date(hourly.time[index]);

          const temperature =
            unit === "C"
              ? hourly.temperature_2m[index]
              : (hourly.temperature_2m[index] * 9) / 5 + 32;

          const info = getWeatherInfo(
            hourly.weather_code[index],
            true
          );

          return (
            <div className="hour-card" key={hourly.time[index]}>
              <p className="hour-time">
                {date.toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>

              <div className="hour-icon">
                {info.icon}
              </div>

              <h3>
                {Math.round(temperature)}°
              </h3>

              <p>
                💧 {hourly.precipitation_probability[index]}%
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HourlyForecast;