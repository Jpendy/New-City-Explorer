const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/location', (req, res) => {
    res.json({ hello: 'location' });
});

app.get('/weather', (req, res) => {
    res.json({ hello: 'weather' });
});

app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });

