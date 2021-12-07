let submit = document.getElementById('result');
result.addEventListener('click',()=>{
    let city = document.getElementById('city').value;
    console.log(city);
    getWeather(city);
    
})
const content = document.getElementById('content')
async function getWeather(city) {
    let blob = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a052a3120e18eac3ee88a81e1fee3918`)
    let data = await blob.json();
    console.log(data.weather);
    createCard(city,data)
}

function createCard(city,data){
    const card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('weather-card')
    content.appendChild(card)
    const card_body = document.createElement('div')
    card_body.classList.add('card-body')
    card_body.style.display = "flex"
    card.appendChild(card_body)
    const name_div = document.createElement('div')
    name_div.classList.add('card-title')
    name_div.classList.add('mt-1')
    name_div.style.cssText ="font-weight: bold; font-family: monospace; font-size: 24px; text-align: center;"
    card_body.appendChild(name_div)
    card_body.style.flexDirection = "column"
    card_body.style.alignItems = "center"
    card_body.style.justifyContent = "center"
    const name = city
    name_div.textContent = name
    const ico = document.createElement('img')
    ico.src = `http://openweathermap.org/img/wn/${data["weather"][0]["icon"]}@2x.png`
    card_body.appendChild(ico)
    const temp_div = document.createElement('div')
    temp_div.classList.add('card-subtitle')
    temp_div.classList.add('mt-1')
    temp_div.style.cssText = "font-size: 20px; margin-bottom: 10px; text-align: center"

    temp_div.textContent = `Temperature: ${Math.round(data['main'][`temp`]-273)}C`
    card_body.appendChild(temp_div)
    const pressure_div = document.createElement('div')
    pressure_div.classList.add('card-subtitle')
    pressure_div.style.cssText = "font-style: bold;font-size: 20px; margin-bottom: 10px; text-align: center"
    pressure_div.textContent = `${data['weather'][0][`description`]}`
    card_body.appendChild(pressure_div)


    const remove_bttn = document.createElement('button')
    remove_bttn.classList.add('btn')
    remove_bttn.classList.add('btn-danger')
    remove_bttn.classList.add('mt-2')

    card_body.appendChild(remove_bttn)
    remove_bttn.textContent = "DELETE"
    remove_bttn.style.cssText = "width:100%"
    remove_bttn.addEventListener('click',()=>{
        card.remove();
    })
}

document.addEventListener('DOMContentLoaded',async ()=>{
   await getWeather('Agartala');
   await getWeather('Belonia');
   await getWeather('Kolkata');
})