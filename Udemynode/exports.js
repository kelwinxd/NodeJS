//Ways to export a module
const _ = require('lodash')
this.hello = "Hello people"
exports.welcome = "Welcome people"
module.exports.bye = "Bye people"
module.exports = {
    greetings: "Hi",
    greetIt(){
        return this.greetings;
    },
    randomN(){
        setInterval(() => console.log(_.random(1,10)), 2000 )
    }

}


