const process = require('process')


// console.log() = process.stdout.write()

// process.stdout.write('Alguma coisa' + '\n')


const quiz = [
    "What you learned today?",
    "What did you found hard?",
    "How much time did u spent studying?"

]


const ask = (index = 0) => {
    process.stdout.write("\n" + quiz[index] + "\n")
}

ask()

const answers = []

// stdin é como input, recebe dados
// aqui diz, sempre que receber dados, execute a função abaixo
// .on significa ouvindo
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < quiz.length){
        ask(answers.length)
    } else {
        console.log(`
        You learned: 
        - ${answers[0]}
        You need improve:
        - ${answers[1]}
        Spent ${answers[2]} studying
        `)
        
        
        process.exit()
    }

})