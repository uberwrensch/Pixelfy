const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/routes.js');

app.use(express.static(__dirname + '/../public/dist'));

app.get('/images/:query', router);
app.get('/random-images', router);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});