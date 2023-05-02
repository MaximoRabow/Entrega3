import express from 'express';
import ProductManager from './modules/ProductManager';

const app = express ();
const productManager = new ProductManager ();

app.use (express.json ());

app.use (express.urlencoded ({extended: true}));

app.get ('/products', async (req, res) => {
    try {
        let prod = await productManager.getProd ();
        console.log(prod);
        res.send (prod);
    } catch (err) {
        res.status (500).send ({err});
    }
})

app.listen (8080, () => {
    console.log('escuchando 8080')
})