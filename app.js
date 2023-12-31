const express = require ("express");
const path = require ("path");

const app = express ();

const publicPath = path.resolve(__dirname, "./public");

app.use( express.static(publicPath) );

app.listen (3000, ()=> {
    console.log ("Servidro corriendo en el puerto 3000");
});

app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./src/views/index.html"));
})

app.get("/login", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./src/views/login.html"));
})

app.get("/register", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./src/views/register.html"));
})