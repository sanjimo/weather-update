//setInnerText function
const setInnerText = (id, value) => {
    document.getElementById(id).innerText = value;
}

//temperatureSet function
const temperatureSet = (id, value) => {
    document.getElementById(id).innerHTML = `
     <span>${value}</span>&deg;C
    `;
}


//searchTemperature function
const searchTemperature = () => {
    //clear validation text
    document.getElementById('validation-check').innerText = '';

    //clear temperature information area
    //document.getElementById('temperature-info').innerText = '';

    //get search input
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
        //clear temperature information area
        document.getElementById('temperature-info').innerText = '';
        document.getElementById('validation-check').innerText = `Please enter a city name!`;
    }
    //clear search field
    document.getElementById('city-name').value = '';
}


//displayTemperature function
const displayTemperature = temperature => {
    //console.log(temperature);
    //for invalid city name
    if (!temperature.name) {
        //clear temperature information area
        document.getElementById('temperature-info').innerText = '';
        setInnerText('validation-check', 'Sorry! Invalid City Name.');
    }
    //for valid city name
    else {
        //set the innerHtml
        const section = document.getElementById('temperature-info');
        section.innerHTML = `
            <div id="info" class="weather-status text-white text-center">
                <img id="weather-icon" src="" alt="">
                <h1 id="city"></h1>
                <h2 id="temp"></h2>
                <h3 id="condition"></h3>
            </div>
        `;
        //set city name
        setInnerText('city', temperature.name);
        //set temperature
        temperatureSet('temp', temperature.main.temp);
        //set condition
        setInnerText('condition', temperature.weather[0].main);
        //set weather-icon
        document.getElementById('weather-icon').setAttribute('src', `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`);
    }
}