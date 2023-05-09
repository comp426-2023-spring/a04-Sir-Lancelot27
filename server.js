import minimist from 'minimist';
import { rpsls } from "../lib/rpsls.js"
import express from 'express';

// cmd line arguments
var args = minimist(process.argv.slice(2));

// Create express application
const app = express();

// Set port to cmd arg or default of 5000
const port = arg.port || 5000;