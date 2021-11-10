let search = document.querySelector('.search-bar');
let enterbtn = document.querySelector('.enter');
let Temperature = document.querySelector('.Temperature');
let Weat = document.querySelector('.Weather');
let city = document.querySelector('.city');
// let Weathers = document.querySelector('.Weathers');


let icon=document.getElementsByClassName("currenticon")[0];
const timeDiv = document.getElementsByClassName("time")[0];

let page = document.querySelector('.card');
let themeButton = document.querySelector('.theme-button');
let image = document.querySelector('img');





search.addEventListener('keyup', (e)=>{
    if (e.key == 'Enter') {
        getWeather(search.value);
    }
})

enterbtn.onclick = function(){
    getWeather(search.value);
}

themeButton.onclick = function(){
    page.classList.toggle('dark-theme');
};

setInterval(() => { setTime(timeDiv) }, 1000);
    
function setTime(sity){
    let date = new Date();
    sity.innerText = date.toLocaleString("en-UK", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}


function dayOfWeek(date){
    let day = new Date(date)
    return(day.toLocaleDateString('en-US', {weekday:'long'}));
}


async function getWeather(city) {
    const url =`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=bf9d673488df4611ad6162034212710&q=${city}&num_of_days=5&format=json`;
    const res = await fetch(url);
    const data = await res.json(); 
    render(data.data)
}

function render(data) {
    // img.src = `./img/${data.current_condition[0].weatherCode}.png`
    Temperature.innerHTML = data.current_condition[0].temp_C + '°C'
    city.innerHTML = `${data.request[0].query}`
    Weat.innerHTML = data.list[0].weather[0].main;
    console.log(forecast.childNodes);
    
    
}

getWeather('Poland');