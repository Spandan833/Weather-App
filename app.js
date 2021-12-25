let submit = document.getElementById('result');
result.addEventListener('click',()=>{
    let city = document.getElementById('city').value;
    console.log(city);
    getWeather(city);
    
})
const content = document.getElementById('content')
async function getWeather(city) {

    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a052a3120e18eac3ee88a81e1fee3918`).then(res =>{
        return res.json()
    }).then(res =>{
        console.log(res);
    })
}
