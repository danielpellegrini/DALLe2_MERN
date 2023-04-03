import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

// pull environment variables from .env file
dotenv.config();

const app = express();
// adding middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Root Route
app.get('/', async (req, res) => {
    res.send('Hello from DALL-E!');
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
    } catch (error) {
        console.log(error)
    }

}

startServer();