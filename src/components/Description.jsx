const Description = ({ weatherData }) => {
    const { main, wind, visibility, weather } = weatherData;
    const { description } = weather[0];
    const { feels_like, pressure, humidity, grnd_level, sea_level } = main;
    const { speed } = wind;

    return (
        <div className={`w-full flex flex-col gap-5 rounded-2xl items-start font-semibold text-gray-400`}>
            <p>AIR CONDITIONS</p>
            <div className="w-fit grid grid-cols-2 self-center md:grid-cols-4 grid-rows-2 gap-5 text-center text-lg backdrop-blur-md p-5 rounded-xl shadow-md">
                {[
                    { label: "Feels Like", value: `${Math.round(feels_like)} °C` },
                    { label: "Pressure", value: `${Math.round(pressure)} hPa` },
                    { label: "Humidity", value: `${Math.round(humidity)} %` },
                    { label: "Wind", value: `${speed} m/sec` },
                    { label: "Ground Level", value: `${grnd_level} hPa` },
                    { label: "Sea Level", value: `${sea_level} hPa` },
                    { label: "Visibility", value: `${visibility / 1000} km` },
                    { label: "Description", value: description },
                ].map((item, idx) => (
                    <div key={idx}>
                        <div>{item.label}</div>
                        <div className={`text-white text-xl`}>{item.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Description;
