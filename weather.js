//setInnerText function
const setInnerText = (id, value) => {
    document.getElementById(id).innerText = value;
}


//searchTemperature function
const searchTemperature = () => {
    const cityName = document.getElementById('city-name').value;
    //input validation
    if (cityName) {
        //weather API and API_KEY declaration
        const api_key = "3e591ff5312669b3a539c8595bddf291";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`;
        //fetch
        fetch(url)
            .then(res => res.json())
            .then(data => displayTemperature(data))
    }
    else {
        setInnerText('validation-check', 'Please enter a city name!');
    }

}


//displayTemperature function
const displayTemperature = temperature => {
    console.log(temperature);
    //set city name
    setInnerText('city', temperature.name);
    //set temperature
    setInnerText('temperature', temperature.main.temp);
    //set condition
    setInnerText('condition', temperature.weather[0].main);
    //set weather-icon
    document.getElementById('weather-icon').setAttribute('src', `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`);
}