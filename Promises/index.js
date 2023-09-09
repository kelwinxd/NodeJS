let ask = false

const promise = new Promise((res,rej) => {
    if(ask){
        return res('order accepted')
    }
    return rej('order denied')
})

promise.then(result => console.log(result)).catch(err => console.log(err)).finally(() => console.log('Finished'))