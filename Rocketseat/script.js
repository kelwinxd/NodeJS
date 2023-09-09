const path = require('path')
//Require chama módulos nativos do Node


console.log(path.basename("/c/Users/Kelwin"))
//Basename mostra o nome do arquivo ou diretório final
// Ex: Kelwin

//Dirname mostra o diretório

const mymod = require('./exports')

console.log(mymod('--name'))

