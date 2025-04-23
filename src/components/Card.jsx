const Card = ({ mainData, name }) => {
    const { temp, feels_like } = mainData;
    return (
        <div className="text-3xl font-semibold">
            <p>City : {name}</p>
            <p>Temperature : {temp}°C</p>
            <p>Feels Like : {feels_like}°C</p>
        </div>
    )
}
export default Card;