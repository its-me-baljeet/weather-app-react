const Description = ({ weatherData, theme }) => {
    const { main, wind, visibility, weather } = weatherData;
    const { description } = weather[0];
    const { feels_like, pressure, humidity } = main;
    const { speed } = wind;
    const isLight = theme === "light";

    return (
        <div className={`w-full flex flex-col gap-5 rounded-2xl items-start font-semibold ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
            <p>AIR CONDITIONS</p>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5 text-center text-lg">
                {[
                    { label: "Feels Like", value: `${Math.round(feels_like)} °C` },
                    { label: "Pressure", value: `${Math.round(pressure)} hPa` },
                    { label: "Humidity", value: `${Math.round(humidity)} %` },
                    { label: "Wind", value: `${speed} m/sec` },
                    { label: "Visibility", value: `${visibility / 1000} km` },
                    { label: "Description", value: description },
                ].map((item, idx) => (
                    <div key={idx}>
                        <div>{item.label}</div>
                        <div className={`${isLight ? 'text-black' : 'text-white'} text-xl`}>{item.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Description;
