import apikey from './apikey';

function api (city) {
  // const endpoint = `https://crossorigin.me/https://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${apikey}`;
  const endpoint = `https://api.apixu.com/v1/forecast.json?key=a2a31a32926644e8b7052519170905&q=${city}&days=7`
  return endpoint;
}

export default api;
