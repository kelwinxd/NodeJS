import http from 'node:http'


const users = []

const server = http.createServer((req,res) => {
   // método de destruturação 
   // seria o memso que:
   // const method = req.method e const url = req.url
    const {method, url} = req
    if (method == 'GET' && url == '/users'){
        
        return res.setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
        // JSON.stringify transforma o dado em JSON
        
    }

    if (method == 'POST' && url == '/users'){
        users.push({
            id: 1, 
            name: 'kelwin',
            email: 'kelwin@',
        })

        
        
        // status de sucesso
        return res.writeHead(200).end()
    }

   
   
    // Aqui estou retornando um status de não encontrado
    return res.writeHead(404).end()
})

server.listen(3333, function (){
    console.log('Server Running')
})
