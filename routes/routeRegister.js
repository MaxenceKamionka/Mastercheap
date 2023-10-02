import express from 'express'
import bcrypt from 'bcrypt' // pour encrypter les mots de passe
const router = express.Router();

import knex from 'knex';
import { development as knexConfig } from '../knexfile.js';

const db = knex(knexConfig);




router.post('/users/register', async (req, res) => {
    try {
        const { user_name, user_email, user_password, user_confirmed_password, user_adress } = req.body;

        console.log({
            user_name,
            user_email,
            user_password,
            user_confirmed_password,
            user_adress
        });

        const isExisting = await db('users').where('user_email', user_email).first();

        //vérifie que les mdp sont les mêmes (le premier et le scond en confirmation)

        if (user_password !== user_confirmed_password) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        //vérifie l'existence de l'utilisateurs dans la bdd

        if (isExisting) {
            return res.status(400).json({ error: 'User already exists' });
        }

        //encrypter le mdp
        const salt = 13;
        const hashedPassword = await bcrypt.hash(user_password, salt);

        //insérer le nouvel utilisateur
        await db('users').insert({ user_name, user_email, user_password: hashedPassword, user_adress });

        return res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;