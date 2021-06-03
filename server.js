const express = require('express');
const app = express()

app.get('/', (req, res)=>{
    // req, quer dizer request de requisição
    // res quer dizer response de resposta
    res.send('Ola mundo')
})

//Para iniciar, digite -> node server.js
app.listen(8080, ()=>{
    console.log('Servidor online')
})