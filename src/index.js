const express = require('express')
require('dotenv').config();

const routes = require('./routes');
const morgan = require('morgan');
const mongoose = require('mongoose');

const cors = require('cors');

const app = express();


mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser:true,useUnifiedTopology: true})
    .then(()=> {
        app.emit('conected')
    })

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

app.use(routes)
app.on('conected', () => {app.listen(3001, () => {console.log('Servidor rodando...')})})

