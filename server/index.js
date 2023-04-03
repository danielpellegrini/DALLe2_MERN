import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

// pull environment variables from .env file
dotenv.config();

const app = express();
// adding middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// api endpoints that can be hooked on from client side
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

// Root Route
app.get('/', async (req, res) => {
    res.send('Hello from index!');
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