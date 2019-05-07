const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=fc1b05d0ca10a7fed12e7f98497966c6&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}