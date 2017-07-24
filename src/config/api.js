import apiKey from './apikey';

function api (city) {
  const endpoint = `https://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`
  return endpoint;
}

export function apiLonLat (lon, lat) {
  const endpoint = `https://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${lon},${lat}&days=7`;
  return endpoint;
}

export default api;
