import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Form = ({ city, setCity }) => {
    const [input, setInput] = useState("");

    function handleSearch() {
        setCity(input.trim())
        setInput("")
    }

    return (
        <div className="w-full flex sm:flex-row">
            <input
                value={input}
                type="text"
                placeholder="Enter city..."
                className="w-full px-4 py-2 rounded-l-lg bg-white/95 dark:bg-black/40 backdrop-blur-md text-black dark:text-white placeholder:text-gray-700 dark:placeholder:text-gray-300 shadow-md font-semibold border border-transparent focus:border-blue-500 focus:outline-none transition-all duration-300"

                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
            />
            <button
                className={`px-5 py-3 rounded-r-lg text-xl sm:text-2xl font-semibold shadow-xl bg-blue-500  transition duration-700`}
                onClick={handleSearch}
            >
                <IoSearch />
            </button>
        </div>
    );
}

export default Form;
