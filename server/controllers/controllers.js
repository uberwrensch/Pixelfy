const axios = require('axios');
const { key } = require('../../config.js');

module.exports = {
    images: {
        get: (req, res) => {
            const keyword = req.params.query;

            const options = {
                url: `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${keyword}`,
                method: 'GET',
                headers: {
                    'Authorization': `Client-ID ${key}`
                }
            };

            axios(options)
                .then(images => {
                    res.status(200).send(images.data.results);
                })
                .catch(err => {
                    console.log(`API call for ${keyword} failed due to ${err}`);
                    res.status(500).send(err);
                });
        }
    },
    randomImages: {
        get: (req, res) => {
            const options = {
                url: 'https://api.unsplash.com/photos/random?count=20',
                method: 'GET',
                headers: {
                    'Authorization': `Client-ID ${key}`
                }
            };

            axios(options)
                .then(images => {
                    res.status(200).send(images.data);
                })
                .catch(err => {
                    console.log(`API call for random images failed due to ${err}`);
                    res.status(500).send(err);
                });
        }
    }
};