//array weather
const weather = [
    {cityname:"Surat",temperature:25,condition:"Cloudy"},
    {cityname:"Anand",temperature:30,condition:"Rainy"},
    {cityname:"Dubai",temperature:40,condition:"Sunny"}
]

const addWeather = (weather,new_weather) => {
    weather.push(new_weather)
}

addWeather(weather,{cityname:"Mubmai",temperature:20,condition:"Sunny"})
console.log(weather)


const hottestCity = (weather) =>{
    return weather.reduce((hottest,weather) => weather.temperature > hottest.temperature ? weather : hottest)
}

console.log(hottestCity(weather))

const getCity = (weather,condition) =>{
    return weather.filter(weather => weather.condition === condition)
}

console.log(getCity(weather,"Sunny"))

const getCities = (weather) => {
    return weather.map((weather)=> `City : ${weather.cityname} , Temp : ${weather.temperature}°C`);
};

console.log(getCities(weather))

const cityDetail = (weather) => {
    return weather.reduce((hottest, current) =>
        current.temperature > hottest.temperature ? current : hottest
    );
};

const { cityname, temperature, condition } = cityDetail(weather);
console.log(`Hottest City: ${cityname}, Temperature: ${temperature}°C, Condition: ${condition}`);

weather.forEach(weather => {
    console.log(`City Name: ${weather.cityname}, Temperature: ${weather.temperature}°C, Condition : ${weather.condition}`)
})