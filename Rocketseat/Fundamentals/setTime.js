const timeOut = 3000 /*1000 = 1 segundo*/
const finish = () => {
    console.log('Finished!')
} 

setTimeout(finish, timeOut)

//Cleartimeout cancela o timeout usa-se:
// clearTimeout(setTimeout)
const list = []

let inter = setInterval(finish, 1000)

// Para cancelar o setInterval depois de um tempo:
setTimeout(() => clearInterval(inter), 4000)


