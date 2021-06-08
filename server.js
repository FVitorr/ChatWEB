const express = require('express');
const app = express()

<<<<<<< HEAD

app.use(express.static("public"))

=======
const indexRouter = require (__dirname + "/router/index.js")

app.use(express.static("public")) // Pag Principal(add CSS IMG ICON)
>>>>>>> 219eeb755a7570b4d592b1ce239e1b127e9bd1d4

app.get('/', (req, res)=>{
    // req, quer dizer request de requisição
    // res quer dizer response de resposta
    res.sendFile(__dirname + "/index.html")
<<<<<<< HEAD
=======
})

app.use('/login',indexRouter) // Router

// Apenas Para Fins de Vizualização (SEM CSS)
// Abrir Uma routa para login e Cadastro

app.get("/registrar" , (req,res) =>{
    res.sendFile(__dirname + "/views/signup.html")
>>>>>>> 219eeb755a7570b4d592b1ce239e1b127e9bd1d4
})

app.listen(8080, ()=>{
    console.log('Servidor online http://localhost:8080')
})