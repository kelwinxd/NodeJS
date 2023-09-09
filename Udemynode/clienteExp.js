const Module = require("./exports")
const http = require('http')
// when you have a index file inside a directory, you dont need to mention it
const Msg = require('./toRequire')


console.log(Module.greetIt())
//console.log(Module.randomN(2,20))





http.createServer((req,res) => {
    res.write(Msg.message)
    if(res.statusCode == 200){
        console.log('server running')
    } else {
        console.log('error starting server')
    }

    res.end()
}).listen(8080)