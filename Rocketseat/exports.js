function getFlag(valor){
   const Index = process.argv.indexOf(valor) + 1 
   return process.argv[Index] 
 }

module.exports = getFlag