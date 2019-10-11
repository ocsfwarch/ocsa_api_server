
const https = require('https');

const OcsaWthrService = {
    // The purpose of this function is to retrieve current weather information.
    // Currently it will only return the results for the Grand Canyon Village
    // for test purposes.
    getWeather(jsonWeather){
        return new Promise( function(resolve, reject){
            const API_TOKEN = '5d14d8a6c3d92e6ac85a1c7b278b985d';
            const URL = `https://api.openweathermap.org/data/2.5/weather?id=5296409&units=imperial&APPID=${API_TOKEN}`;
            //const URL = `https://api.openweathermap.org/data/2.5/weather?id=0&units=imperial&APPID=${API_TOKEN}`;
            let bodyResponse = "";
            https.get(URL, res => {
                res.setEncoding('utf8');
                res.on('data', data => {
                    bodyResponse += data;
                });
                res.on('end', () => {
                    const tempResponse = JSON.parse(bodyResponse);
                    if(tempResponse.hasOwnProperty('cod')){
                        if(tempResponse.cod === "400"){
                            reject(tempResponse.message);
                        }else{
                            const fullResponse = {
                                name:                tempResponse.name,
                                description:         tempResponse.weather[0].description,
                                current_temperature: tempResponse.main.temp,
                                min_temperature:     tempResponse.main.temp_min,
                                max_temperature:     tempResponse.main.temp_max,
                                humidity:            tempResponse.main.humidity,                        
                            }
                            resolve(JSON.stringify(fullResponse));
                        }
                    }else{
                        reject(`Invalid request`);
                    }
               });
            });
    
        });// End of Promise
    }// End getWeather()
}// End OcsaWthrService

module.exports = OcsaWthrService;