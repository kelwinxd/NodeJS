const express = require("express")
const app = express()


//Rotas
app.get("/", function(req,res){
   res.sendFile(__dirname + "/html/file.html")
})
app.get("/sobre", function(req, res){
    res.send("<h1>About what?</h1>")
})

app.get("/para/:nome/:idade", function(req, res){
    res.send("<h1>Seu nome é " + req.params.nome + " <h1> E sua idade é " + req.params.idade)
})





app.listen(8082, function(){
    console.log("Server Running bitch")
})