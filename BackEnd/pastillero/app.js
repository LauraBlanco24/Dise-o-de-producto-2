import express from "express";
import morgan from "morgan";
import cookieParse from "cookie-parser"
import cors from "cors"
import authRoutes from './routers/auth.routes.js'

const app = express()

const corsOptions = {
    origin: '*',
    credentials: true,

};

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParse());
app.use(cors(corsOptions))
app.use('/api', authRoutes)

export default app;