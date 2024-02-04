import express from 'express';
import cors from 'cors';
import { router } from './routes/routes.js';

const app = express();

app.use(express.json({ limit: "200kb" }));
app.use(express.urlencoded({ limit: "200kb", extended: true }));

app.use(express.static('public'));

const corsOption = {
    whitelist: process.env.CORS_ORIGIN,
    credentials: true
}
app.use(cors(corsOption));


app.use("/api/v1", router);


export { app }











