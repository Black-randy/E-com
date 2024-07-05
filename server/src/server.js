const express = require("express");
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(express.static('public'));

const cors = require('cors');
// Allow all origins
app.use(cors());
// Allow specific origin(s)
app.use(cors({
  origin: 'https://willowcraft.vercel.app/'
}));

const { getCollectionItems, insertItem } = require('./dataService');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.get("/api", (req, res) => {
    res.json({ message: "NODEJS API PROJECT", name: "Randy" });
});

app.get("/api/getdata", async (req, res) => {
    try {
        const items = await getCollectionItems('documents');
        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get("/api/getproducts", async (req, res) => {
    try {
        const products = await getCollectionItems('products');
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post("/api/post", async (req, res) => {
    try {
        await insertItem('documents', req.body);
        res.json("Success");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post("/api/post_product", async (req, res) => {
    try {
        await insertItem('products', req.body);
        res.json("Success");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
