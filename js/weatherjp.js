// WeatherJP
const sortStandard = document.getElementById('sort-standard');
const sortGeography = document.getElementById('sort-geography');
const sortPopularity = document.getElementById('sort-popularity');
const iconStandard = document.getElementById('icon-standard');
const iconGeography = document.getElementById('icon-geography');
const iconPopularity = document.getElementById('icon-popularity');

let cityArray = [];
let sortNum = 0;

// Sorting functions
sortStandard.addEventListener('click', () => {
    sortNum = 1;
    sortFunc(1);
    iconStandard.src = '../icons/weatherjp/rectangle-filled.png';
    iconGeography.src = '../icons/weatherjp/rectangle-stroke.png';
    iconPopularity.src = '../icons/weatherjp/rectangle-stroke.png';
});

sortGeography.addEventListener('click', () => {
    sortNum = 2;
    sortFunc(2);
    iconStandard.src = '../icons/weatherjp/rectangle-stroke.png';
    iconGeography.src = '../icons/weatherjp/rectangle-filled.png';
    iconPopularity.src = '../icons/weatherjp/rectangle-stroke.png';
});

sortPopularity.addEventListener('click', () => {
    sortNum = 3;
    sortFunc(3);
    iconStandard.src = '../icons/weatherjp/rectangle-stroke.png';
    iconGeography.src = '../icons/weatherjp/rectangle-stroke.png';
    iconPopularity.src = '../icons/weatherjp/rectangle-filled.png';
});

function sortFunc(e) {
    const cityContainer = document.querySelector('.container-items');
    const cityItem = Array.from(document.querySelectorAll('.container-item'));
    if(e === 1){
        cityArray = ['Morioka', 'Okayama', 'Tokyo', 'Sapporo', 'Miyazaki', 'Osaka', 'Kumamoto', 'Niigata'];
    } else if (e === 2){
        cityArray = ['Sapporo', 'Morioka', 'Niigata', 'Tokyo', 'Osaka', 'Okayama', 'Kumamoto', 'Miyazaki'];
    } else if (e === 3){
        cityArray = ['Tokyo', 'Osaka', 'Sapporo', 'Okayama', 'Morioka', 'Niigata', 'Miyazaki', 'Kumamoto'];
    }
    const sortItems = cityItem.sort((a, b) => {
        const aItem = a.querySelector('h2').textContent;
        const bItem = b.querySelector('h2').textContent;
        return cityArray.indexOf(aItem) - cityArray.indexOf(bItem);
    });
    cityContainer.innerHTML = '';
    sortItems.forEach(cityItem => cityContainer.appendChild(cityItem));
};

// Variables for data
const moriokaWeatherIcon = document.getElementById('morioka-weather-icon');
const moriokaWeatherText = document.getElementById('morioka-weather-text');
const moriokaTemperatureText = document.getElementById('morioka-temperature-text');
const moriokaPrecipitationText = document.getElementById('morioka-precipitation-text');

const okayamaWeatherIcon = document.getElementById('okayama-weather-icon');
const okayamaWeatherText = document.getElementById('okayama-weather-text');
const okayamaTemperatureText = document.getElementById('okayama-temperature-text');
const okayamaPrecipitationText = document.getElementById('okayama-precipitation-text');

const tokyoWeatherIcon = document.getElementById('tokyo-weather-icon');
const tokyoWeatherText = document.getElementById('tokyo-weather-text');
const tokyoTemperatureText = document.getElementById('tokyo-temperature-text');
const tokyoPrecipitationText = document.getElementById('tokyo-precipitation-text');

const sapporoWeatherIcon = document.getElementById('sapporo-weather-icon');
const sapporoWeatherText = document.getElementById('sapporo-weather-text');
const sapporoTemperatureText = document.getElementById('sapporo-temperature-text');
const sapporoPrecipitationText = document.getElementById('sapporo-precipitation-text');

const miyazakiWeatherIcon = document.getElementById('miyazaki-weather-icon');
const miyazakiWeatherText = document.getElementById('miyazaki-weather-text');
const miyazakiTemperatureText = document.getElementById('miyazaki-temperature-text');
const miyazakiPrecipitationText = document.getElementById('miyazaki-precipitation-text');

const osakaWeatherIcon = document.getElementById('osaka-weather-icon');
const osakaWeatherText = document.getElementById('osaka-weather-text');
const osakaTemperatureText = document.getElementById('osaka-temperature-text');
const osakaPrecipitationText = document.getElementById('osaka-precipitation-text');

const kumamotoWeatherIcon = document.getElementById('kumamoto-weather-icon');
const kumamotoWeatherText = document.getElementById('kumamoto-weather-text');
const kumamotoTemperatureText = document.getElementById('kumamoto-temperature-text');
const kumamotoPrecipitationText = document.getElementById('kumamoto-precipitation-text');

const niigataWeatherIcon = document.getElementById('niigata-weather-icon');
const niigataWeatherText = document.getElementById('niigata-weather-text');
const niigataTemperatureText = document.getElementById('niigata-temperature-text');
const niigataPrecipitationText = document.getElementById('niigata-precipitation-text');

// Fetch
fetch('https://api.weatherapi.com/v1/forecast.json?key=feed4ffb378f42cd8c4100955241912&q=morioka&days=1&aqi=no&alerts=no')
.then(response => response.json())
.then(data => {
    moriokaWeatherIcon.src = precipitationIcon(data);
    moriokaWeatherText.innerText = data.current.condition.text;
    moriokaTemperatureText.innerText = `Temperature: ${data.current.temp_c}°`;
    moriokaPrecipitationText.innerText = precipitationCheck(data);
})
.catch(error => console.log('This is wrong:' + error))

fetch('https://api.weatherapi.com/v1/forecast.json?key=feed4ffb378f42cd8c4100955241912&q=okayama&days=1&aqi=no&alerts=no')
.then(response => response.json())
.then(data => {
    okayamaWeatherIcon.src = precipitationIcon(data);
    okayamaWeatherText.innerText = data.current.condition.text;
    okayamaTemperatureText.innerText = `Temperature: ${data.current.temp_c}°`;
    okayamaPrecipitationText.innerText = precipitationCheck(data);
})
.catch(error => console.log('This is wrong:' + error))

fetch('https://api.weatherapi.com/v1/forecast.json?key=feed4ffb378f42cd8c4100955241912&q=tokyo&days=1&aqi=no&alerts=no')
.then(response => response.json())
.then(data => {
    tokyoWeatherIcon.src = precipitationIcon(data);
    tokyoWeatherText.innerText = data.current.condition.text;
    tokyoTemperatureText.innerText = `Temperature: ${data.current.temp_c}°`;
    tokyoPrecipitationText.innerText = precipitationCheck(data);
})
.catch(error => console.log('This is wrong:' + error))

fetch('https://api.weatherapi.com/v1/forecast.json?key=feed4ffb378f42cd8c4100955241912&q=sapporo&days=1&aqi=no&alerts=no')
.then(response => response.json())
.then(data => {
    sapporoWeatherIcon.src = precipitationIcon(data);
    sapporoWeatherText.innerText = data.current.condition.text;
    sapporoTemperatureText.innerText = `Temperature: ${data.current.temp_c}°`;
    sapporoPrecipitationText.innerText = precipitationCheck(data);
})
.catch(error => console.log('This is wrong:' + error))

fetch('https://api.weatherapi.com/v1/forecast.json?key=feed4ffb378f42cd8c4100955241912&q=miyazaki&days=1&aqi=no&alerts=no')
.then(response => response.json())
.then(data => {
    miyazakiWeatherIcon.src = precipitationIcon(data);
    miyazakiWeatherText.innerText = data.current.condition.text;
    miyazakiTemperatureText.innerText = `Temperature: ${data.current.temp_c}°`;
    miyazakiPrecipitationText.innerText = precipitationCheck(data);
})
.catch(error => console.log('This is wrong:' + error))

fetch('https://api.weatherapi.com/v1/forecast.json?key=feed4ffb378f42cd8c4100955241912&q=osaka&days=1&aqi=no&alerts=no')
.then(response => response.json())
.then(data => {
    osakaWeatherIcon.src = precipitationIcon(data);
    osakaWeatherText.innerText = data.current.condition.text;
    osakaTemperatureText.innerText = `Temperature: ${data.current.temp_c}°`;
    osakaPrecipitationText.innerText = precipitationCheck(data);
})
.catch(error => console.log('This is wrong:' + error))

fetch('https://api.weatherapi.com/v1/forecast.json?key=feed4ffb378f42cd8c4100955241912&q=kumamoto&days=1&aqi=no&alerts=no')
.then(response => response.json())
.then(data => {
    kumamotoWeatherIcon.src = precipitationIcon(data);
    kumamotoWeatherText.innerText = data.current.condition.text;
    kumamotoTemperatureText.innerText = `Temperature: ${data.current.temp_c}°`;
    kumamotoPrecipitationText.innerText = precipitationCheck(data);
})
.catch(error => console.log('This is wrong:' + error))

fetch('https://api.weatherapi.com/v1/forecast.json?key=feed4ffb378f42cd8c4100955241912&q=niigata&days=1&aqi=no&alerts=no')
.then(response => response.json())
.then(data => {
    niigataWeatherIcon.src = precipitationIcon(data);
    niigataWeatherText.innerText = data.current.condition.text;
    niigataTemperatureText.innerText = `Temperature: ${data.current.temp_c}°`;
    niigataPrecipitationText.innerText = precipitationCheck(data);
})
.catch(error => console.log('This is wrong:' + error))

// Data functions
function precipitationCheck(data) {
    const precip_mm = data.current.precip_mm || 0;
    if (precip_mm  == 0) {
        return `Precipitation: 0%`
    } else if (precip_mm  > 0.01 && precip_mm  <= 0.025) {
        return `Precipitation: 10%`
    } else if (precip_mm  > 0.025 && precip_mm  <= 0.05) {
        return `Precipitation: 25%`
    } else if (precip_mm  > 0.05 && precip_mm  <= 0.075) {
        return `Precipitation: 50%`
    } else if (precip_mm  > 0.075 && precip_mm  <= 0.1) {
        return `Precipitation: 75%`
    } else if (precip_mm  > 0.1) {
        return `Precipitation: 100%`
    } else {
        return `Precipitation: N/A`
    };
};

function precipitationIcon(data) {
    if(data.current.precip_mm == 0 && (data.current.condition.text == 'Sunny' || data.current.condition.text == 'Clear')){
        return `../icons/weatherjp/clear_day.png`
    } else if(data.current.precip_mm == 0 && (data.current.condition.text == 'Partly Cloudy' || data.current.condition.text == 'Cloudy' || data.current.condition.text == 'Overcast')) {
        return `../icons/weatherjp/cloud.png`
    } else if(data.current.precip_mm > 0.01 || data.current.condition.text == 'Mist' || data.current.condition.text == 'Fog' || data.current.condition.text == 'Freezing Fog'){
        return `../icons/weatherjp/foggy.png`
    } else {
        return `../icons/weatherjp/rainy.png`
    };
};

// Time
const conditionTime = document.querySelectorAll('.condition-time');
function timeJapanFunc() {
    const now = new Date();
    const timeJapan = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" })
    );
    const hours = timeJapan.getHours();
    const minutes = timeJapan.getMinutes();
    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    for(let i = 0; i < conditionTime.length; i++){
        conditionTime[i].innerText = `Time: ${clockStr}`;
    }
};
timeJapanFunc();
setInterval(timeJapanFunc, 1000);