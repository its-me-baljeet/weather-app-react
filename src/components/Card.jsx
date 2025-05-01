import { getWeatherIcon } from "../utils/weatherIcons";

const Card = ({ weather, mainData, name }) => {
    const { temp } = mainData;

    return (
        <div className="w-full flex flex-col sm:flex-row justify-between items-center text-5xl sm:text-7xl font-semibold gap-3">
            <div className="flex flex-col gap-4 text-center sm:text-left">
                <p className="">{name}</p>
                <p className={`text-white text-5xl`}>{Math.round(temp)} °C</p>
            </div>
            <div className="text-3xl sm:text-5xl flex flex-col items-center">
                <p>{getWeatherIcon(weather[0].id, 80)}</p>
                <p>{weather[0]?.main}</p>
            </div>
        </div>
    );
}

export default Card;
