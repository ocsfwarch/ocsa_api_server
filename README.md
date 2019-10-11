# ocsa_api_server
The purpose of this app is to provide REST endpoints for client apps.

## `Source Code Dependencies`
*    cors
*    dotenv
*    express
*    helmet
*    morgan
*    uuid
*    valid-url
*    winston

## `API endpoints`
## `GET`
* /gcapi/itinerary - The purpose of this route is to retrieve the itinerary for the GC2019 app.
* Parameters: none
* JSON return format:
    * [
        {
            key:"",
            active:"",
            date:"",
            type:"",
            desc:""
        }, ...
    ]

* /wthrapi/getWeather - The purpose of this route is to retrieve weather information
* Parameters: {city:value}
* JSON return format:
    * {
        name:'',
        description:'',
        current_temperature:'',
        min_temperature:'',
        max_temperature,'',
        humidity:''
    }
