const request = require("request");

// PRIVATE SECURITY
const dotenv = require("dotenv").config();

//CITY REQUEST
const city = process.argv[2];

//API
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.API_KEY}&units=metric&lang=fr`;

//QUESTION
if (!city){ 
    return console.log(`Il faut écrire le nom d'une ville dont tu souhaite connaitre la météo\n  \n(par exemple: node app.js lille,fr)`)
}


request(url, (err, res, body) =>{
const data = JSON.parse (body)
console.log(`\n Prévision méteorologique pour ${data.name} à ${date.getHours()}h.\n`)
console.log(` Description du climat:  ${data.weather[0].description}\n`)
console.log(` Il fait actuellement ${data.main.temp}°C.\n` )
console.log(` La température minimale aujourd'hui sera de ${data.main.temp_min}°C. \n La température maximale aujourd'hui sera de  ${data.main.temp_max}°C.`);

})

//script
const date = new Date();