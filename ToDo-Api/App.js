require('dotenv').config()

const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const createError = require('http-errors');
const { StatusCodes } = require('http-status-codes');
const cors = require('cors');

require('./config/db.config');

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173/",
}))

app.use(logger('dev'));
app.use(express.json());

const routes = require('./config/routes.config');
app.use('api', routes);

/* Server */

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`The app is up at port ${port} 🐝🐝`)
})