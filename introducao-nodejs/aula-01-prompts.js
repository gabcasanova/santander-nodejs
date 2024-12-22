const rl = require('readline') // criar interface pra interagir com o usuário

const prompt = rl.createInterface({
    input:  process.stdin,    // stdin - standard input - teclado
    output: process.stdout    // stdout - standard output - terminal
})

const promptPromise = {
    question: (pergunta) => new Promise((resolve, reject) => {
        try {
            prompt.question((pergunta), (resposta) => { resolve(resposta) })
        } catch (error) {
            reject(error)
        }
    }),

    close: () => prompt.close()
}

/*prompt.question("Qual seu número favorito? ", (resposta) => {
    console.log(`O dobro do seu número favorito é ${parseInt(resposta * 2)}`)

    prompt.question("Qual sua cor favorita? ", (resposta) => {
        console.log(`Sua cor favorita é ${resposta}`)
        prompt.close()
    })
})*/

async function askUser() {
    const numero = await promptPromise.question("Qual seu número favorito? ")
    console.log(`O dobro do seu número favorito é ${parseInt(numero * 2)}`)

    const cor = await promptPromise.question("Qual sua cor favorita?")
    console.log(`A sua cor favorita é ${cor}`)

    promptPromise.close()
}

askUser()