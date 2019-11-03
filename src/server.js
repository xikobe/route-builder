const createGPX = require('gps-to-gpx').default;
const fs = require('fs');
const mime = require('mime');
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
    const file = `${process.cwd()}/files/route.gpx`

    var filename = path.basename(file);
    var mimetype = mime.getType(file);

    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', mimetype);

    var filestream = fs.createReadStream(file);
    filestream.pipe(res);
});

app.post('/download', (req, res) => {
    const waypoints = req.body;
    const activityName = 'running';
    const startTime = Date.now();

    const gpx = createGPX(waypoints, {
      activityName,
      startTime,
    });

    fs.mkdir(`${process.cwd()}/files/`, { recursive: true }, (err) => {
      if (err) throw err;
    });

    const filePath = `${process.cwd()}/files/route.gpx`;

	fs.writeFile(filePath, gpx, function(err) {
    	if (err) { throw err }
    	res.status(200).json({
    		message: "File successfully written"
    	});
    })
});

app.get('/', function (req, res) {
    console.log(req);
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
