// const express = require('express');
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

const app = require('./app');
const PORT = process.env.PORT || 3000;



// console.log(process.env)

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
