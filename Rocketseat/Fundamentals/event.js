/*Dispara e ouve eventos*/ 
import { inherits } from 'util'
// its like: const nome = require e Eventemitter = EventEmitter()
const { EventEmitter } = require('events')

const ev = new EventEmitter()

//ev.on(nomedoEvento, (argumentodoEvento))
ev.on('Something', (msg) => {
    console.log('Ive heard you, ', msg)
})

// ev.emit(nomedoEvento, Argumento)
ev.emit('Something', "Kel")
ev.emit('Something', "Gabi")

// ev.once dispara uma unica emissão, a primeira

//Test

const { inherits } = require('util')

function Char(name){
    this.name = name
}




