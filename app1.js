const apikey=`3265874a2c77ae4a04bb96236a642d2f`;
const searchvalue=document.querySelector("#search");
const form=document.querySelector("form");
const weather=document.querySelector("#weather");

async function gettingtemp(city){
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const response= await fetch(url);
    const data=await response.json();
    return weatershower(data);

}
function weatershower(data){
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
}

form.addEventListener("submit",function(e){
    gettingtemp(searchvalue.value);
    e.preventDefault();
})