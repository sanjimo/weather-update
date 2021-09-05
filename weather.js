//setInnerText function
const setInnerText = (id, value) => {
    document.getElementById(id).innerText = value;
}


//searchTemperature function
const searchTemperature = () => {
    const cityName = document.getElementById('city-name').value;
    //weather API and API_KEY declaration
    const api_key = "3e591ff5312669b3a539c8595bddf291";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`;
    //fetch
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}


//displayTemperature function
const displayTemperature = temperature => {
    console.log(temperature);
    setInnerText('city', temperature.name);
}