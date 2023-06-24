const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temperature = document.getElementById("temperature");
const temp_status = document.getElementById("temp_status");
const body = document.getElementById('body');

const url =`api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1ed3c78650f1906854b9f37bd7565bd1`
const submit = async (event)=>{
    event.preventDefault();  
    let city_name_value = cityName.value;
    if(city_name_value === ""){
        city_name.innerText = `Please enter a city name before searching`
    }else{
        try{
            const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name_value}&units=metric&APPID=1ed3c78650f1906854b9f37bd7565bd1`);
            const data = await responce.json();
            console.log(data);   
            city_name.innerText =`${data.name} , ${data.sys.country}`;   
            temperature.innerText = `${data.main.temp}`;
            let weather1 = data.weather[0].main;
            console.log(weather1);
            if(weather1 == 'Clear'){
                temp_status.innerHTML =  ' <i class="fa-sun fa" aria-hidden="true"></i>';
                body.style.backgroundImage = 'url(images/clear.jpg)';
            }
            else if(weather1 == 'Cloud'){
                temp_status.innerHTML = '<i class="fa-cloud fa" aria-hidden="true"></i>';
                body.style.backgroundImage = 'url(images/cloude.jpg)';
            }else if(weather1 == 'Rain'){
                temp_status.innerHTML = '<i class="fa-cloud-rain fa" aria-hidden="true"></i>';
                body.style.backgroundImage = 'url(images/rain.jpg)';
            }
            else{
                    temp_status.innerHTML = '<i class="fa-cloud fa" aria-hidden="true"></i>';
                    body.style.backgroundImage = 'url(images/normal.jpg)';
            }
        }catch{
            city_name.innerText = `Please enter a correct city name` ;
        }
    }
}
submitBtn.addEventListener('click', submit);    