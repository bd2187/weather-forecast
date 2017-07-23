import apikey from './apikey';

function api (city) {
  const endpoint = `https://api.apixu.com/v1/forecast.json?key=a2a31a32926644e8b7052519170905&q=${city}&days=7`
  return endpoint;
}

export function apiLonLat (lon, lat) {
  console.log(lon, lat)
  const endpoint = `https://api.apixu.com/v1/forecast.json?key=a2a31a32926644e8b7052519170905&q=${lon},${lat}&days=7`;
  return endpoint;
}

export default api;
