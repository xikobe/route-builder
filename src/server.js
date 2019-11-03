const createGPX = require('gps-to-gpx').default;
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/download', (req, res) => {
    const waypoints = req.body;
    const activityName = 'running';
    const startTime = Date.now();

    const gpx = createGPX(waypoints, {
      activityName,
      startTime,
    });

    fs.writeFile('test1.gpx', gpx, 'binary', function (error) {
    res.download('test1.gpx');
});

});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
