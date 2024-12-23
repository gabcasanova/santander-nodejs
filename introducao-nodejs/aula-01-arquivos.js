const path = require('node:path')
const fs = require('node:fs')
const dotenv = require('dotenv')

dotenv.config()
console.log(process.env.NODE_ENV)

const filePath    = path.join(process.cwd(), "introducao-nodejs", "texto.txt")
const fileOutPath = path.join(process.cwd(), "introducao-nodejs", "texto-com-linhas.txt")

console.log(filePath)

console.time('leitura do arquivo')
console.time('manipular arquivos') // iniciar tempo

fs.readFile(filePath, {}, (erro, dado) => {
    if (erro) {
        console.error(`Erro na leitura do arquivo no caminho: ${filePath}`)
        return
    }

    console.timeEnd('leitura do arquivo')

    const texto  = dado.toString()
    const linhas = texto.split('\n')

    const linhasAjustadas = linhas.map((linha, index, arrayDeLinhas) => 
        `${index + 1} - ${linha}`
    )

    fs.writeFile(fileOutPath, linhasAjustadas.join('\n'), {}, (erro) => {
        if (erro) {
            console.error(`Erro na leitura do arquivo no caminho: ${fileOutPath}`)
            return
        }
    })

    // console.log(dado.toString()) // decodificar o buffer para uma string.

    /* linhas.forEach((linha, index, arrayDeLinhas) => 
        console.log(`${index + 1} - ${linha}`
    )) */

    console.log(`Arquivo salvo no bucket: ${process.env.S3_BUCKET}`)
    console.timeEnd('manipular arquivos') // encerrar tempo
})

