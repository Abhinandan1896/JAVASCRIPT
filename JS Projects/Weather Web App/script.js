//Data -->done
//Variable to store the element -->done
//function to grt the data from weather app -->done
//Manipulate the variable of already created element -->done


let data;

const inputBox = document.getElementById('inputBox');
const countryName = document.getElementById('countryName');
const stateName = document.getElementById('stateName');
const cityName = document.getElementById('cityName');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const temprature = document.getElementById('temprature');
const logoImage = document.getElementById('logoImage');
const weatherStatus = document.getElementById('weatherStatus');

const getData =async (event)=>{
    event.preventDefault();
    if(!inputBox.value){
        alert('Please enter the city name');
        return;
    }

    //
    const city=inputBox.value;
    //Fetch Details
    const fetchData=await fetch(`https://api.weatherapi.com/v1/current.json?key=7856806546144a0f93463849231904&q=${city}`);

    const orgData = await fetchData.json();
    data=orgData;

    //display the data in html
    countryName.innerHTML = data.location.country;
    stateName.innerHTML = data.location.region;
    cityName.innerHTML = data.location.name;
    humidity.innerHTML = data.current.humidity;
    windSpeed.innerHTML = data.current.wind_kph;
    temprature.innerHTML = data.current.temp_c;
    logoImage.src=data.current.condition.icon;
    weatherStatus.innerHTML = data.current.condition.text;
};

