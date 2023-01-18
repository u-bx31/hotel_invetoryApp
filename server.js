const express = require('express');
const jsonServer = require('json-server');

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/api',jsonServer.router('db.json'));

app.use(express.static(__dirname + '/dist/hotel_invetory'));

app.get('/*',(req,res)=>{
    res.sendFile(__dirname + '/dist/hotel_invetory/index.html')
});
app.listen(PORT, ()=>{
    console.log('initialize Server Port :'+PORT);
});