import express from 'express'
import { stringify } from 'qs';
//const express = require('express');  //doesn't work
const app = express();
import { DEHandler } from './routes.js';

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile('index.html');
})

app.get('/api/data/:number', DEHandler);

app.listen('3000');