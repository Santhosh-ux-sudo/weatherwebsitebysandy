
const input=document.getElementById("input")
// const btn=document.getElementById("searchicon")
const result=document.querySelector(".result")

let apikey="16036b8215029a16c971f989a64da46d"


input.addEventListener("keyup",function(e){
    let cityName=input.value
    if(e.key=="Enter" && input.value!=""){

        
        let api=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`
        error.style.display="block"
        error.innerHTML="loading"
        error.style.color="green"
        result.style.display="none"
        fetch(api).then(response => response.json()).then(result=>weatherdetails(result))
    }
})
let error=document.querySelector(".error")

function weatherdetails(x){
    if(x.cod=="404"){
        error.innerHTML="city not found"
        error.style.color="red"
        result.style.display="none"
    }
    else{
    let name=x.name
    let country=x.sys.country
    let temp=x.main.temp
    let humidit=x.main.humidity
    let id=x.weather[0].id
    let description=x.weather[0].description
    let speed=x.wind.speed
    let i

    let c=Math.floor(temp-273.15)
    if(id>=200 && id<=232){
        i="/Weather Icons/storm.svg" 
    }
    else if(id>=300 && id<=321){
        i="/Weather Icons/rain.svg"
    }
    else if(id>=500 && id<=531){
        i="/Weather Icons/rain.svg"
    }
    else if(id>=600 && id<=622){
        i="/Weather Icons/snow.svg"
    }
    else if(id>=701 && id<=781){
        i="/Weather Icons/haze.svg"
    }
    else if(id==800){
        i="/Weather Icons/clear.svg"
    }
    else{
         i="/Weather Icons/cloud.svg"
    }
   
    let title=document.querySelector(".title")
    let celcius=document.querySelector(".celcius")
    let weather=document.querySelector(".weather")
    let humi=document.querySelector(".humidity")
    let wind=document.querySelector(".wind")
    let clou=document.querySelector(".cloud")

    title.innerHTML="Weather in " + name +" , "+country
    celcius.innerHTML=c+"°C"
    weather.innerHTML=description
    humi.innerHTML="Humidity : "+humidit+"%"
    wind.innerHTML="Wind : "+speed+"m/s"
    clou.src=i
    error.style.display="none"
    result.style.display="block"
    
    }

}

