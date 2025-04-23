import { useEffect, useState } from 'react'
import Form from './components/Form';
import Card from './components/Card';

function App() {
  const [city, setCity] = useState("Moradabad");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getWeatherData() {
      try {
        setIsLoading(true);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=132b9ec6eb9edd76256fdfa3764ad6a5&units=metric`;
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data)
        setWeatherData(data);
      }
      catch (err) {
        console.log(err)
      }
      finally {
        setIsLoading(false);
      }
    }
    getWeatherData();
  }, [city]);
  const { main, name } = weatherData ? weatherData : {};

  return (
    <div className='h-screen bg-gray-900 flex justify-center items-center flex-col gap-3'>
      <p className='text-5xl font-bold text-white'>Weather</p>
      <div className='h-[60vh] w-[50vw] bg-gray-600 rounded-xl text-white flex flex-col justify-start items-center gap-5 p-5'>
        <Form city={city} setCity={setCity} />
        {
          isLoading && <p>Loading...</p>
        }
        {
          !isLoading && weatherData?.cod == 404 && <p>City not found!</p>
        }
        {
          !isLoading && weatherData && weatherData?.cod < 400 && <Card mainData={main} name={name} />
        }

      </div>
    </div>
  )
}

export default App