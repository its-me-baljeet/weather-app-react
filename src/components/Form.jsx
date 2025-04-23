import { useState } from "react";

const Form = ({ city, setCity }) => {
    const [input, setInput] = useState(city);
    return (
        <div className="w-[100%] px-5 py-2 flex gap-2">
            <input value={input} type="text" placeholder="Enter city..." className="w-full rounded-md px-5 py-2 text-3xl font-semibold shadow-xl text-gray-600" onChange={(e) => setInput(e.target.value)} />
            <button className="px-5 py-2 bg-gray-800 rounded-md text-2xl font-semibold shadow-xl" onClick={(e) => setCity(input)}>Search</button>
        </div>
    )
}
export default Form;