const DaysForecastCard = ({ forecastData }) => {
    const dailyNoonForecasts = forecastData.list.filter(forecast => {
        return forecast.dt_txt.includes('12:00:00');
    });
    console.log(dailyNoonForecasts)

    return (
        <div className="w-full mt-4">
            <h3 className="text-xl font-semibold mb-2">5-Day Forecast</h3>
            <div className="flex justify-between overflow-x-auto">
                {dailyNoonForecasts.map((forecast, index) => {
                    const date = new Date(forecast.dt_txt);
                    const dayOfWeek = index === 0 ? "Today" : date.toLocaleDateString('en-US', { weekday: 'short' });
                    return (
                        <div key={index} className="flex-shrink-0 p-3 bg-gray-700 rounded-lg text-center mx-1 min-w-[100px]">
                            <p className="font-bold">{dayOfWeek}</p>
                            <img
                                src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                                alt={forecast.weather[0].description}
                                className="mx-auto"
                            />
                            <p className="text-lg font-medium">{Math.round(forecast.main.temp)}°C</p>
                            <p className="text-xs">{forecast.weather[0].description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DaysForecastCard;