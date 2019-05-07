const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': 'ddf29333f6mshb3d1b384da90ab2p136d27jsn8e878f31119d' }
    });


    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${direccion}`);
    }


    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}