(()=>{const e=document.querySelector("#weatherimg"),n=document.querySelector("#cityinfo"),t=document.querySelector("#celcius"),r=document.querySelector("#feels"),c=document.querySelector("#prep"),o=document.querySelector("#hum"),i=document.querySelector("#wind"),u=document.querySelector("#error"),m=document.getElementById("citydata");async function a(m){const a=await fetch("http://api.weatherapi.com/v1/current.json?key=0be880a24392440c85c95053232310&q="+m+"&aqi=no",{mode:"corse"});if(400===a.status)u.innerText="No matching location found!";else{u.innerText="";const m=await a.json();e.src="https://"+m.current.condition.icon,n.innerText=m.location.name+", "+m.location.country,t.innerText=m.current.temp_c+" °C",r.innerText=m.current.feelslike_c+" °C",c.innerText=m.current.precip_mm+" mm",o.innerText=m.current.humidity+" %",i.innerText=m.current.wind_kph+" kph"}}m.onkeypress=function(e){if(e||(e=window.event),"Enter"==(e.code||e.key))return a(m.value),m.value="",!1},a("London")})();