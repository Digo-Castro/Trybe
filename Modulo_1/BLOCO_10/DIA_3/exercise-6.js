// const { rejects } = require('assert');
const { rejects } = require('assert');
const fetch = require('node-fetch');
const { resolve } = require('path');
// const { resolve } = require('path');

const fetchDog = async () => {
  const dogs = await fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json()
    .then((data) => data.status));
  if (dogs === 'success') {
    return 'Request succcess';
  }
  return 'Request failed';
};

module.exports = fetchDog;