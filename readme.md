<p align="center">
  <img width="300" height="300" src="https://github.com/wontkim/Pixelfy/blob/main/public/dist/assets/pixelfy.png?raw=true">
</p>

Table of Contents
-----------------

Description
-----------
Search for those pictures that illicit happines and pixelfy your life! A search engine optimized to get the most artistic, and high quality pictures.

Getting Started
---------------
The following section is the neccesary dependencies and instructions to get the project deployed locally.

### Dependencies
- Node.js v14.15.5

### Set up
1. Run `npm install` to install the neccesary dependencies.
2. Run `npm run dev-react` to compile all public files into a bundle.
3. Run `npm run dev-server` to serve up the files at `port 3000

### API key
1. Go to https://unsplash.com/developers and register as a developer.
2. Generate a `config.js` file in the root directory.
3. Export out an object like so e.g. { "key": `API key here` }

***Note***: Default key is limited to 50 requests per hour

Routes
----------
GET route for image search word

    "/images/:query"

GET route for random images

    "/random-images"

Example of the Application
--------------------------
**Search with keyword** \
<img src='https://media.giphy.com/media/zyD5iYTQy0m4gU413l/giphy.gif'/>
\
\
**Open up image for full resolution** <br />
<img height=50%  src='https://media3.giphy.com/media/vRf77hpJ25yD6YLr5d/giphy.gif' />
\
\
**Random search function** \
<img src='https://media.giphy.com/media/QHCrbTmsiX4QvrNBpd/giphy.gif'/>

Project Version
---------------
### v0.1.0
1. Search feature implemented allowing users to query for their favorite images.
2. Random feature implemented allowing users to grab random images.
3. Users are able to click on an image to see the full resolution.


Future Features
---------------