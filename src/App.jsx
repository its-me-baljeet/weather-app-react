import { useEffect, useMemo, useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import DaysForecastCard from './components/DaysForecastCard';
import HrsForecastCard from './components/HrsForecastCard';
import Description from './components/Description';
import SunRiseSet from './components/SunRiseSet';


function App() {
  const [city, setCity] = useState("Moradabad");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [forecastData, setForecastData] = useState(null);

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


  const backgroundVideo = useMemo(() => {
    if (!weatherData || !weatherData.weather || !weatherData.weather[0]) {
      return "/videos/default.mp4";
    }

    const weatherId = weatherData.weather[0].id;
    if (weatherId >= 200 && weatherId < 300) {
      return "/videos/light.mp4";
    } else if (weatherId >= 300 && weatherId < 600) {
      return "/videos/rain.mp4";
    } else if (weatherId >= 600 && weatherId < 700) {
      return "/videos/snow.mp4";
    } else if (weatherId >= 700 && weatherId < 800) {
      return "/videos/fog.mp4";
    } else if (weatherId === 800) {
      return "/videos/clear.mp4";
    } else if (weatherId > 800) {
      return "/videos/clouds.mp4";
    }



    return "/videos/default.mp4";
  }, [weatherData]);



  return (

    <div className="relative min-h-screen w-screen flex flex-col px-4 py-5 md:px-10">
      {/* VIDEO BACKGROUND */}
      <video
        key={backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className={`fixed top-0 left-0 w-full h-full z-0 bg-black/50`}></div>

      {/* Content */}
      <div className={`w-full rounded-xl text-white flex flex-col md:flex-row gap-5 relative z-10 font-poppins`}>
        <div className="w-full md:w-[70%] flex flex-col gap-5">
          <Form city={city} setCity={setCity} />
          {isLoading && <p>Loading...</p>}
          {!isLoading && weatherData?.cod === "404" && (
            <p className="text-red-500 font-semibold text-lg">City not found!</p>
          )}
          {!isLoading && weatherData?.cod === "400" && (
            <p className="text-red-500 font-semibold text-lg">City can't be empty!</p>
          )}

          {!isLoading && weatherData && weatherData?.cod < 400 && (
            <>
              <Card weather={weather} mainData={main} name={name} />
              <HrsForecastCard forecastData={forecastData} />
              <Description weatherData={weatherData} />
            </>
          )}
        </div>

        <div className="w-full md:w-[30%] flex flex-col gap-5">
          {!isLoading && weatherData && weatherData?.cod < 400 && (
            <>

              <DaysForecastCard forecastData={forecastData} />
              <SunRiseSet weatherData={weatherData} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
