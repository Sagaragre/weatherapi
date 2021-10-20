document.querySelector(".search").addEventListener('click',weather);
function weather() {
    var city = document.querySelector(".city").value;
    console.log(city);
    if (city == "") {
        alert("please enter correct city name");
    } else {
        var key = "28a053fccb43508b62f64f6aaaeb41d2";
        var ap = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+key+'&units=metric';
        fetch(ap)
                .then(function(response) {
                     return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    
                    var cityname = data['name'];
                    var citytemp = data['main']['temp'];
                    var tempinformation = data['weather'][0]['description'];
                    var weatherid = data['weather'][0]['id'];
                    console.log(weatherid);
                    console.log(cityname);
                    console.log(citytemp);
                    console.log(tempinformation);
                    var wrapper = document.querySelector('.wrapper');
                    var name = document.createElement('span');
                    name.setAttribute('class','nameval');
                    name.innerHTML = cityname;
                    var info = document.createElement('span');
                    info.innerHTML = tempinformation;
                    var temperature = document.createElement('span');
                    temperature.setAttribute('class','tempval');
                    temperature.innerHTML= citytemp+'&#176;C';
                    wrapper.appendChild(name);
                    wrapper.appendChild(info);
                    wrapper.appendChild(temperature);
                    var backcolor = document.querySelector(".body-container");
                    if (weatherid < 250) {
                        backcolor.classList.add('thunderstorm');
                        console.log("thunderstorm");
                    }
                    else if(weatherid < 350) {
                        backcolor.classList.add('drizzle');
                        console.log("drizzle");
                    } else if(weatherid < 550) {
                        console.log("rain");
                    } else if(weatherid < 650) {
                        console.log("snow");
                    } else if(weatherid < 790) {
                        backcolor.classList.add('atmosphere');
                        console.log("atomsphere");
                    } else if(weatherid == 800) {
                        console.log("clear");
                    } else if(weatherid < 805) {
                        backcolor.classList.add('clouds');
                        console.log("clouds");
                    }

                    function resetdata() {
                        var spans = document.querySelectorAll('span');
                        for(var ele of spans) {
                            wrapper.removeChild(ele);
                        }
                    }
                    document.querySelector(".search").addEventListener('click',resetdata);
                })
                .catch( function() {
                    alert("City not found");
                })
    }
   
}

























