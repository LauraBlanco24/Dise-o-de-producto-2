import express from "express";
import morgan from "morgan";
import cookieParse from "cookie-parser"
import cors from "cors"

import authRoutes from './routers/auth.routes.js'
import pillBoxRoutes from './routers/pillBox.routes.js'

const app = express()

const corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true,
};

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParse());
app.use(cors(corsOptions))

app.use('/api', authRoutes)
app.use('/api', pillBoxRoutes)
export default app;