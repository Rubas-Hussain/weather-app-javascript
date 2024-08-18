const appBody = document.querySelector('#appWrapper');
const weatherValue = document.querySelector('#weatherValue');
const cityName = document.querySelector('#cityName');
const weatherCondition = document.querySelector('#weatherCondition');
const apiKey = 'f7f3f7373767f9255f81b7846914bceb';
const currentCity = 'Sydney';

// Switch case for weather condition
const backgroundImageHandler = (condition) => {
    switch (condition) {
        case 'Clouds':
            appBody.style.backgroundImage = "url('https://media4.giphy.com/media/5HK4TiiBeLSZq/giphy.webp?cid=ecf05e47kspt0p50c9t7ofgv1nn5wk6fjr8qhwtou30lu8ld&ep=v1_gifs_search&rid=giphy.webp&ct=g')";
            break;
        case 'Rain':
            appBody.style.backgroundImage = "url('https://media4.giphy.com/media/ZyFCksxxD9tmLYfGJo/giphy.gif?cid=6c09b952r1q4t0tf12eakqnem259gzfikvai4zbi4j30jncu&ep=v1_gifs_search&rid=giphy.gif&ct=g')";
            break;
        case 'Clear':
            appBody.style.backgroundImage = "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTFsZmc2OGxmdmd4eGc4eng2anJtc3V5MTUwMDBvb2tneWRrbzNndiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/0Styincf6K2tvfjb5Q/giphy.webp')";
            break;
        case 'Snow':
            appBody.style.backgroundImage = "url('https://media2.giphy.com/media/3o6ZtbOHLpK7A7pbtG/giphy.webp?cid=ecf05e47kspt0p50c9t7ofgv1nn5wk6fjr8qhwtou30lu8ld&ep=v1_gifs_search&rid=giphy.webp&ct=g')";
            break;
        case 'Thunderstorm':
            appBody.style.backgroundImage = "url('https://media2.giphy.com/media/l1J9u3TZfpmeDLkDq/giphy.webp?cid=ecf05e47kspt0p50c9t7ofgv1nn5wk6fjr8qhwtou30lu8ld&ep=v1_gifs_search&rid=giphy.webp&ct=g')";
            break;
        case 'Mist':
            appBody.style.backgroundImage = "url('https://media1.giphy.com/media/xT9KVrZ7BwbA7zBfyg/giphy.webp?cid=ecf05e47kspt0p50c9t7ofgv1nn5wk6fjr8qhwtou30lu8ld&ep=v1_gifs_search&rid=giphy.webp&ct=g')";
            break;
            default:
                appBody.style.backgroundImage = "url('https://media0.giphy.com/media/q8IF03Iw8TxC0/200.webp?cid=ecf05e47x9bxgss8d0ka3elrnc67jbrvpvzeqfdp5i7xfjva&ep=v1_gifs_search&rid=200.webp&ct=g')";
                break;
            
    }
};

// Fetching weather data
const getWeatherData = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`);
        
        if (response.status >= 200 && response.status < 300) {
            const data = await response.json();
            weatherValue.innerHTML = `${data.main.temp}&deg;`;
            cityName.innerHTML = `${data.name}`;
            const condition = `${data.weather[0].main}`;
            weatherCondition.innerHTML = condition;
            backgroundImageHandler(condition);

        } else {
            alert('Failed to fetch data');
        }
    } catch (error) {
        alert(error);
    }
};


getWeatherData();
