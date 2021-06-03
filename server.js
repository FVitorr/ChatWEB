const express = require('express');
const app = express()

// add Static
app.use(express.static(__dirname + "/views/public"))

app.get('/', (req, res)=>{
    // req, quer dizer request de requisição
    // res quer dizer response de resposta
    res.sendFile(__dirname + "/views/loginScreen.html")
})

//Para iniciar, digite -> node server.js
app.listen(8080, ()=>{
    console.log('Servidor online')
})