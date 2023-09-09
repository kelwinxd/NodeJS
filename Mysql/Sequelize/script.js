/*É uma biblioteca que conecta o node ao DB*/
const Sequelize = require('sequelize')

const seq = new Sequelize('test', 'root','root8', {
    host:"localhost",
    dialect: 'mysql',
    port:'3306'
} )

seq.authenticate().then(function(){
    console.log('Success!')
}).catch(function(err){
    console.log("Failed"+ err)
})
