function WeatherDetails({ weather, unit }) {
  const current = weather.current;

  const windSpeed =
    unit === "C"
      ? current.wind_speed_10m
      : current.wind_speed_10m * 0.621371;

  return (
    <section className="details-section">
      <h2>Weather Details</h2>

      <div className="details-grid">
        <div className="detail-card">
          <div className="detail-icon">💧</div>
          <div>
            <p>Humidity</p>
            <h3>{current.relative_humidity_2m}%</h3>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">💨</div>
          <div>
            <p>Wind Speed</p>
            <h3>
              {Math.round(windSpeed)}{" "}
              {unit === "C" ? "km/h" : "mph"}
            </h3>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">🧭</div>
          <div>
            <p>Wind Direction</p>
            <h3>{current.wind_direction_10m}°</h3>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">🌧️</div>
          <div>
            <p>Rain</p>
            <h3>{current.rain} mm</h3>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">☁️</div>
          <div>
            <p>Cloud Cover</p>
            <h3>{current.cloud_cover}%</h3>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">🎈</div>
          <div>
            <p>Pressure</p>
            <h3>{Math.round(current.pressure_msl)} hPa</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeatherDetails;