import minimist from 'minimist';
import { rps } from "./lib/rpsls.js"
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

// Root route with /app
app.get('/app', (req, res) => {
	res.status(200).send("200 OK");
});

// Route for RPS
app.get('/app/rps', (req, res) => {
    res.status(200).send(rps());
})

// Route for RPSLS
app.get('/app/rpsls', (req, res) => {
    res.status(200).send(rpsls());
})

// Route for RPS against an opponent with URL encoded data
app.get('/app/rps/play', (req, res) => {
    res.status(200).send(rps(req.query.shot));
})

// Route for RPSLS against an opponent with URL encoded data
app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.query.shot));
})

// Route for RPS against an opponent with JSON body data
app.post('/app/rps/play', (req, res) => {
    res.status(200).send(rps(req.body.shot));
})

// Route for RPSLS against an opponent with JSON body data
app.post('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.body.shot));
})

// Route for RPS against an opponent with shot in parameter endpoint
app.get('/app/rps/play/:arg', (req, res) => {
    res.status(200).send(rps(req.params.arg));
})

// Route for RPSLS against an opponent with shot in parameter endpoint
app.get('/app/rpsls/play/:arg', (req, res) => {
    res.status(200).send(rpsls(req.params.arg));
})

// Default rooute for any endpoints not defined
app.get("*", function (req, res) {
    res.status(404).send('404 NOT FOUND');
});

// Set app to listen on port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});