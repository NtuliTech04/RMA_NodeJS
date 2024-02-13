const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//MongoDB configuration & connection
const connectDb = require('./src/app/database/connection');
dotenv.config({path: './src/environments/config.env'});
connectDb();

const server = express();

//Log requests using morgan
server.use(morgan('tiny'));

//Register view engine
server.set('view engine', 'ejs');
server.set('views', path.resolve(__dirname, 'src/views'));

//Static files & middleware
server.use(express.static('public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


//Layouts
var expressLayouts = require('express-ejs-layouts');
server.use(expressLayouts);
// server.set('layout', 'layouts/layout');
server.set('layout', path.resolve(__dirname, 'src/shared/layouts/layout'));


//Teacher & Student Routes
const teacherRoutes = require('./src/routes/teacherRoutes');
const studentRoutes = require('./src/routes/studentRoutes');
server.use('/teacher', teacherRoutes);
server.use('/student', studentRoutes);

//Landing Route
server.get("/", (req, res) => {
    res.render("landing/index");
});


//Setting up port with express js
const PORT = process.env.PORT || 8080
server.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) });


// 404 page
server.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});