let submit = document.getElementById('result');
result.addEventListener('click',()=>{
    let city = document.getElementById('city').value;
    console.log(city);
    getWeather(city);
    
})

const content = document.getElementById('content')
function getWeather(city) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a052a3120e18eac3ee88a81e1fee3918`).then(res =>{
        return res.json()
    }).then(res =>{
        console.log(res);
        editCard(city,res);
    })
}

let editCard = (city,data)=>{
    document.querySelector('.city').textContent = city;
    document.querySelector('.temp').textContent = `${Math.floor(data['main']['temp']-273)}C`;
    const ico = document.querySelector('.weather-icon');
    ico.src = `http://openweathermap.org/img/wn/${data["weather"][0]["icon"]}@2x.png`;
}
window.addEventListener('DOMContentLoaded',()=>{
    getWeather("Agartala")
})