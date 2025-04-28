import { getWeatherIcon } from "../utils/weatherIcons";

const DaysForecastCard = ({ forecastData }) => {
    const dailyNoonForecasts = forecastData?.list.filter(forecast => forecast.dt_txt.includes('12:00:00'));

    return (
        <div className="w-full rounded-2xl font-semibold">
            <h3 className="text-md font-semibold mb-5 text-gray-400">5-DAY FORECAST</h3>
            <div className="w-full flex flex-col gap-5 overflow-x-auto">
                {dailyNoonForecasts.map((forecast, index) => {
                    const date = new Date(forecast.dt_txt);
                    const dayOfWeek = index === 0 ? "Today" : date.toLocaleDateString('en-US', { weekday: 'short' });

                    return (
                        <div key={index} className="flex justify-between items-center p-4 border-b-2 border-gray-500 text-sm sm:text-base">
                            <p>{dayOfWeek}</p>
                            {getWeatherIcon(forecast.weather[0].id, 40)}
                            <p>{Math.round(forecast.main.temp)}°C</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DaysForecastCard;
