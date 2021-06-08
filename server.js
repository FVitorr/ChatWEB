const express = require('express');
const app = express()


app.use(express.static("public"))


app.get('/', (req, res)=>{
    // req, quer dizer request de requisição
    // res quer dizer response de resposta
    res.sendFile(__dirname + "/index.html")
})

app.listen(8080, ()=>{
    console.log('Servidor online http://localhost:8080')
})