const routes = require('express').Router();
const postsContollers = require('./controllers/postsControllers')
const multer = require('multer');
const multerConfig = require('./config/multer')

routes.post('/posts', multer(multerConfig).single('file'), postsContollers.envio)


module.exports = routes;