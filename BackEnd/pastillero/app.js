import express from "express";
import morgan from "morgan";
import cookieParse from "cookie-parser"

const app = express()

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParse());

export default app;