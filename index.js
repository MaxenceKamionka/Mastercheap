
import express from 'express'
import { stringify } from 'qs';
//const express = require('express');  //doesn't work
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile('index.html');
})

app.get('/api/data/:number', (request, response) => {
    const number = request.params.number;
    const res = generateResponse(number);
    response.json(res);
});

//returns the string as it is if not a number and multiply by 2 if it's one
function generateResponse(number) {
    if (isNaN(number)) {
        return { result: number };
    }
    return { result: number * 2 };
}

app.listen('3000');