//Dois jeitos de importar módulos:
// const nome = require('modulo') - CommonJS
// import módulo from 'node:módulo' - ModuleJS

import http from 'node:http'

// GET => Buscar
// POST => Criar
// PUT => Atualizar tudo
// PATCH => Atualizar específico
// DELETE => Deletar

// http:
    // - Method
    // - Url



const users = []

const server = http.createServer((req,res) => {
   // método de destruturação 
   // seria o memso que:
   // const method = req.method e const url = req.url
    const {method, url} = req
    if (method == 'GET' && url == '/users'){
        return res.end(JSON.stringify(users))
    }

    if (method == 'POST' && url == '/users'){
        users.push({
            id: 1, 
            name: 'kelwin',
            email: 'kelwin@',
        })
        
        
        
        return res.end('Criação de usuário')
    }

   
   
   
    return res.end('Hello Kelwin')
})

server.listen(3333, function (){
    console.log('Server Running')
})



