import { getWeatherIcon } from "../utils/weatherIcons";

const Card = ({ weather, mainData, name, theme }) => {
    const { temp } = mainData;
    const isLight = theme === "light";

    return (
        <div className="w-full flex flex-col sm:flex-row justify-between items-center text-2xl sm:text-3xl font-semibold gap-3">
            <div className="flex flex-col gap-4 text-center sm:text-left">
                <p>{name}</p>
                <p className={`${isLight ? 'text-black' : 'text-white'} text-5xl`}>{Math.round(temp)}°C</p>
            </div>
            <div>
                {getWeatherIcon(weather[0].id, 80)}
            </div>
        </div>
    );
}

export default Card;
