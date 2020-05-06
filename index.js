const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();
const request = require('superagent');


const PORT = process.env.PORT || 3000;

// app.use(cors());

app.use(cors({
    origin: true,
    credentials: true
}));

// const locationData = require('./data/geo.json');
// const weatherData = require('./data/weather.json');

const { mungeWeather } = require('./utils.js');
const { mungeLocation } = require('./utils.js');


app.get('/location', async(req, res) => {

    const data = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATIONIQ_Key}&q=${req.query.search}&format=json`);
    const mungedData = mungeLocation(data.body);
    res.json(mungedData);
});



app.get('/weather', async(req, res) => {

    const data = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${req.query.search}&key=${process.env.WEATHERBIT_KEY}`);
    const mungedData = mungeWeather(data.body);
    res.json( mungedData );
});

app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });

