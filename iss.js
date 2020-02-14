/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');
const website = 'https://api.ipify.org?format=json';

const fetchMyIP = function(callback) { 
request(website, (error, response, body) => {
const data = JSON.parse(body) 
  callback(null, data);
  if (error) {
    callback(error, null);
    return;
  }

  if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    callback(Error(msg), null);
    return;
  } 
  const data = JSON.parse(body) 
  callback(null, data);
})
}  

module.exports = { fetchMyIP };