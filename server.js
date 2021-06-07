const express = require('express');
const app = express()

const indexRouter = require (__dirname + "/router/index.js")

app.use(express.static("public")) // Pag Principal(add CSS IMG ICON)

app.get('/', (req, res)=>{
    // req, quer dizer request de requisição
    // res quer dizer response de resposta
    res.sendFile(__dirname + "/index.html")
})

app.use('/login',indexRouter) // Router

// Apenas Para Fins de Vizualização (SEM CSS)
// Abrir Uma routa para login e Cadastro

app.get("/registrar" , (req,res) =>{
    res.sendFile(__dirname + "/views/signup.html")
})

app.listen(8080, ()=>{
    console.log('Servidor online http://localhost:8080')
})