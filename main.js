(()=>{const e=document.querySelector("#weatherimg"),n=document.querySelector("#cityinfo"),t=document.querySelector("#celcius"),r=document.querySelector("#feels"),c=document.querySelector("#prep"),o=document.querySelector("#hum"),i=document.querySelector("#wind"),u=document.querySelector("#error"),a=document.getElementById("citydata");async function m(a){const m=await fetch("http://api.weatherapi.com/v1/current.json?key=0be880a24392440c85c95053232310&q="+a+"&aqi=no");if(400===m.status)u.innerText="No matching location found!";else{u.innerText="";const a=await m.json();e.src="https://"+a.current.condition.icon,n.innerText=a.location.name+", "+a.location.country,t.innerText=a.current.temp_c+" °C",r.innerText=a.current.feelslike_c+" °C",c.innerText=a.current.precip_mm+" mm",o.innerText=a.current.humidity+" %",i.innerText=a.current.wind_kph+" kph"}}a.onkeypress=function(e){if(e||(e=window.event),"Enter"==(e.code||e.key))return m(a.value),a.value="",!1},m("London")})();