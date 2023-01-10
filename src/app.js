require("dotenv").config();
const express = require("express");
const app = express();

const homeRoutes = require('./routes/home'); 
const productRoutes = require('../src/routes/products'); 
const detailRoutes = require('../src/routes/details'); 
const loginRoutes = require('./routes/login'); 
const registerRoutes = require('./routes/register'); 
const cartRoutes = require('./routes/cart'); 

app.use("/",homeRoutes);
app.use("/products",productRoutes);
app.use("/details",detailRoutes);
app.use("/login",loginRoutes);
app.use("/register",registerRoutes);
app.use("/cart",cartRoutes);

app.listen(process.env.PORT, () =>{ 
    console.log("Server listening on port: ", process.env.PORT);
});

module.exports = app;