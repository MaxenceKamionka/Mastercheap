import express from 'express'
import bcrypt from 'bcrypt' // pour encrypter les mots de passe
const router = express.Router();

import knex from 'knex';
import { development as knexConfig } from '../knexfile.js';

const db = knex(knexConfig);



router.post('/users/login', async (req, res) => {
    try {
        const { user_email, user_password } = req.body;

        const user = await db('users').where('user_email', user_email).first();

        if (!user) {
            res.status(401).json({ error: 'Invalid email or password' });
        }

        //compare le mdp et mdp encrypté

        const passwordMatch = await bcrypt.compare(user_password, user.user_password);

        if (!passwordMatch) {
            res.status(401).json({ error: 'Invalid email or password' });
        }

        req.session.user = { user_name: user.user_name };

        res.redirect('/users/dashboard'); // redirige l'utilisateur sur le dashboard.

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;