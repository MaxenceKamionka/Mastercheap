import express from 'express'
import { stringify } from 'qs';
import { dirname } from 'path';
//const express = require('express');  //doesn't work
const app = express();
import { DEHandler } from './routes.js';

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile('index.html');
})

app.get('^/$|index(.html)?', (request, response) => {
    response.sendFile('index.html');
})

app.get('^/$|about(.html)?', (request, response) => {
    response.sendFile('about.html');
})

app.get('/assignment2/:number', DEHandler);


app.listen('3000');