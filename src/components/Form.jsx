import { useState } from "react";

const Form = ({ city, setCity, theme }) => {
    const [input, setInput] = useState(city);
    const isLight = theme === "light";

    return (
        <div className="w-full flex flex-col sm:flex-row gap-3">
            <input
                value={input}
                type="text"
                placeholder="Enter city..."
                className={`w-full rounded-md px-5 py-3 text-2xl sm:text-3xl font-semibold shadow-xl ${isLight ? 'bg-white text-black' : 'bg-gray-500 text-white'}`}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                className={`px-5 py-3 rounded-md text-xl sm:text-2xl font-semibold shadow-xl ${isLight ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-800 text-white'} transition duration-700`}
                onClick={() => setCity(input)}
            >
                Search
            </button>
        </div>
    );
}

export default Form;
