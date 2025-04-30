import { Sun, CloudMoon } from "lucide-react"; // Import necessary icons from lucide-react

const SunRiseSet = ({ weatherData }) => {
    function formatTime(unixTimestamp) {
        return new Date(unixTimestamp * 1000).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    return (
        <div className="w-full flex flex-col items-start gap-5 text-md font-semibold text-gray-400 rounded-2xl">
            <p className="w-full">SUNRISE & SUNSET</p>
            <div className="w-fit flex flex-wrap gap-4 justify-center self-center">
                {/* Sunrise */}
                <div className="flex flex-col items-center w-24 text-center backdrop-blur-md p-5 rounded-xl shadow-md">
                    <Sun className="text-yellow-500 text-3xl" />
                    <p className="text-white text-lg">Sunrise</p>
                    <p className="text-sm">{formatTime(weatherData?.sys?.sunrise)}</p>
                </div>
                {/* Sunset */}
                <div className="flex flex-col items-center w-24 text-center backdrop-blur-md p-5 rounded-xl shadow-md">
                    <CloudMoon className="text-blue-500 text-3xl" />
                    <p className="text-white text-lg">Sunset</p>
                    <p className="text-sm">{formatTime(weatherData?.sys?.sunset)}</p>
                </div>
            </div>
        </div>
    );
};

export default SunRiseSet;
