const express = require('express');
const app = express();

app.listen(3030, () => {
    console.log("Servicio ubicado en el puerto 3030");
});

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/DH-Heroes/views/index.html");
});

app.get("/babbage", (req,res) => {
    res.sendFile(__dirname + "/DH-Heroes/views/babbage.html");
});

app.get("/berners-lee", (req,res) => {
    res.sendFile(__dirname + "/DH-Heroes/views/berners-lee.html");
});

app.get("/clarke", (req,res) => {
    res.sendFile(__dirname + "/DH-Heroes/views/clarke.html");
});

app.get("/hamilton", (req,res) => {
    res.sendFile(__dirname + "/DH-Heroes/views/hamilton.html");
});

app.get("/hopper", (req,res) => {
    res.sendFile(__dirname + "/DH-Heroes/views/hopper.html");
});

app.get("/lovelace", (req,res) => {
    res.sendFile(__dirname + "/DH-Heroes/views/lovelace.html");
});

app.get("/turing", (req,res) => {
    res.sendFile(__dirname + "/DH-Heroes/views/turing.html");
});

app.use(express.static(__dirname + "/DH-Heroes/public"));