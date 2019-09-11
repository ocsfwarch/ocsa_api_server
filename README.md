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
* /itinerary - The purpose of this route is to retrieve the itinerary for the GC2019 app.
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

