import minimist from 'minimist';
import { rpsls } from "./lib/rpsls.js"
import express from 'express';

// cmd line arguments
var args = minimist(process.argv.slice(2));

// Create express application
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set port to cmd arg or default of 5000
const port = args.port || 5000;




// Default route with /app
app.get('/app', (req, res) => {
	res.status(200).send("200 OK");
});


// Default rooute for any endpoints not defined
app.get("*", function (req, res) {
    res.status(404).send('404 NOT FOUND');
});

// Set app to listen on port
app.listen(port, () => {
    console.log('Server running on port ${port}');
});