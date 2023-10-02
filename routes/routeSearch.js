import express from 'express'
const router = express.Router();

import knex from 'knex';
import { development as knexConfig } from '../knexfile.js';

const db = knex(knexConfig);

router.post('/search/product', async (req, res) => {
    try {
        const { product_name } = req.body;
        const products = await db('product').select('*').where('prod_name', 'like', `%${product_name}%`);
        console.log(products);

        if (!products || products.length === 0) {
            res.status(404).json({ error: 'Non-existent product' });
        } else {
            res.status(200).json({ message: 'Products found', products });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


export default router;