import { useEffect, useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import DaysForecastCard from './components/DaysForecastCard';
import HrsForecastCard from './components/HrsForecastCard';
import Description from './components/Description';
import { FiMoon } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";

function App() {
  const [city, setCity] = useState("Moradabad");
  const [theme, setTheme] = useState("dark");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    async function getWeatherData() {
      try {
        setIsLoading(true);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=132b9ec6eb9edd76256fdfa3764ad6a5&units=metric`;
        const resp = await fetch(url);
        const data = await resp.json();
        const latitude = data?.coord?.lat;
        const longitude = data?.coord?.lon;

        if (latitude && longitude) {
          const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=132b9ec6eb9edd76256fdfa3764ad6a5&units=metric`;
          const forecastResp = await fetch(forecastUrl);
          const forecastData = await forecastResp.json();
          setForecastData(forecastData);
        }
        setWeatherData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    getWeatherData();
  }, [city]);

  const { main, name, weather } = weatherData || {};
  const textColor = theme === "light" ? "text-black" : "text-white";

  return (
    <div className="relative min-h-screen w-screen flex flex-col px-4 py-5 md:px-10">
      {/* Background layers */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${theme === "light" ? "opacity-100" : "opacity-0"} bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300`}></div>
      <div className={`absolute inset-0 transition-opacity duration-700 ${theme === "dark" ? "opacity-100" : "opacity-0"} bg-gradient-to-b from-gray-700 via-gray-800 to-black`}></div>

      {/* Content */}
      <div className={`w-full rounded-xl ${textColor} flex flex-col md:flex-row gap-5 relative z-10`}>
        <div className="w-full md:w-[70%] flex flex-col gap-10">
          <Form city={city} setCity={setCity} theme={theme} />
          {isLoading && <p>Loading...</p>}
          {!isLoading && weatherData?.cod === 404 && <p>City not found!</p>}
          {!isLoading && weatherData && weatherData?.cod < 400 && (
            <>
              <Card weather={weather} mainData={main} name={name} theme={theme} />
              <HrsForecastCard forecastData={forecastData} theme={theme} />
              <Description weatherData={weatherData} theme={theme} />
            </>
          )}
        </div>

        <div className="w-full md:w-[30%] flex flex-col gap-5">
          {/* Theme Toggle Button */}
          <div className="self-end md:self-start">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className={`px-4 py-2 rounded-lg ${theme === "light" ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-800 text-white'} transition duration-700 text-2xl font-semibold`}
            >
              {theme === "light" ? <FiMoon /> : <MdOutlineWbSunny />}
            </button>
          </div>
          {!isLoading && weatherData && weatherData?.cod < 400 && (
            <DaysForecastCard forecastData={forecastData} theme={theme} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
