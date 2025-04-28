import { getWeatherIcon } from "../utils/weatherIcons";

const HrsForecastCard = ({ forecastData, theme }) => {
    const isLight = theme === "light";
    const hrsForecasts = forecastData?.list.filter((_, idx) => idx < 6) || [];

    return (
        <div className={`w-full flex flex-col items-start gap-5 text-md font-semibold ${isLight ? 'text-gray-600' : 'text-gray-400'} rounded-2xl`}>
            <p className="text-center w-full">TODAY'S FORECAST</p>
            <div className="w-full flex flex-wrap gap-4 justify-center">
                {hrsForecasts.map((forecast, idx) => {
                    const date = new Date(forecast.dt_txt);
                    const hours = date.getHours();
                    const minutes = date.getMinutes();
                    const ampm = hours >= 12 ? 'PM' : 'AM';
                    const formattedHours = hours % 12 || 12;
                    const formattedMinutes = minutes.toString().padStart(2, '0');
                    const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;

                    return (
                        <div className="flex flex-col items-center w-24" key={idx}>
                            <p>{timeString}</p>
                            {getWeatherIcon(forecast.weather[0].id, 50)}
                            <p className={`${isLight ? 'text-black' : 'text-white'} text-lg`}>{Math.round(forecast.main.temp)}°C</p>
                            <p className="text-sm">{forecast.weather[0].description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HrsForecastCard;
