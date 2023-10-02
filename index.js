import express from 'express'
import { stringify } from 'qs';
import { dirname } from 'path';


//const express = require('express');  //doesn't work
const app = express();

app.use(express.static('public'));



///////////
// Views //
///////////

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));



app.get("/", (req, res) => {
    res.render("index");
});

app.get('/users/register', (req, res) => {
    res.render("register");
});

app.get('/users/login', (req, res) => {
    res.render("login");
});



///////////////////////////////
// SESSION AND COOKIE PARSER //
///////////////////////////////


import session from 'express-session'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();


app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
}));



/////////////
// REGISTER//
/////////////


import registerRouter from './routes/routeRegister.js';

//Test to see what the user write in the form

/*
app.post("/users/register", (req, res) => {
    let { user_name, user_email, user_password, user_confirmed_password, user_adress } = req.body;
    console.log({
        user_name,
        user_email,
        user_password,
        user_confirmed_password,
        user_adress
    });
});
*/

app.use(registerRouter);




///////////
// LOGIN //
///////////


import loginRouter from './routes/routeLogin.js';

app.use(loginRouter);

app.get('/users/dashboard', (req, res) => {
    if (req.session.user) {

        const username = req.session.user.user_name;
        console.log(req.session.user.user_name);
        res.render('dashboard', { user: username });
    } else {

        res.redirect('/users/login');
    }
});



////////////
// LOGOUT //
///////////


app.get('/users/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
        }
        res.redirect('/');
    });
});



////////////
// SEARCH //
////////////


import searchRouter from './routes/routeSearch.js';

app.use(searchRouter);



//////////////
//// Knex ////
//////////////

import knex from 'knex';
import { development as knexConfig } from './knexfile.js';


const db = knex(knexConfig);


// Select every users

db.select('*')
    .from('users')
    .then((rows) => {
        console.log(rows);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        db.destroy();
    });






app.listen('3000', () => {
    console.log("Server running on port 3000 !");
});