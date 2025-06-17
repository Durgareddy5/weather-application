const button=document.querySelector("#search-button");
const input=document.querySelector("#city-input");

const cityName= document.getElementById('city-name');
const cityTime= document.getElementById('city-time');
const cityTemp= document.getElementById('city-temp');

 async function getData(cityname) {
  const promise= await fetch(
        `http://api.weatherapi.com/v1/current.json?key=8d60220b4a2945d3a36181124250204&q=${cityname}&aqi=yes`
        );
    return   await  promise.json()  // function which converts response body into JSON //because the promise.json also sends a promise so i need to await on it  // 

}
 
input.addEventListener("keydown", function(event){
    if(event.key=="Enter")
    {
        event.preventDefault(); //prevents form submission if inside a form//
        button.click();
    }
})


button.addEventListener("click", async ()=>{
    const value=input.value;
    const result=await getData(value); //since getData is returning a promise so we need to await since i used await i need to async the function //
     cityName.innerText=`${result.location.name} ${result.location.region}, ${result.location.country}`;
     cityTime.innerText=result.location.localtime;
     cityTemp.innerText=result.current.temp_c;
     console.log(result);
});