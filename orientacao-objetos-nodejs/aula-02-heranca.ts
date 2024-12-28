/* class Animal {
    public nome: string
    public idadeEmMeses: number

    constructor(nome: string, idadeEmMeses: number) {
        this.nome = nome
        this.idadeEmMeses = idadeEmMeses
    }
} */

interface AnimalInterface {
    nome: string,
    idadeEmMeses: number
    comer: () => void
}

class Animal implements AnimalInterface {
    constructor(public nome: string, public idadeEmMeses: number) {}

    comer(): void{
        console.log(`${this.nome} se alimentou.`)
    }

    andar(): void{
        console.log(`${this.nome} andou.`)
    }
}

class AnimalVoador extends Animal implements AnimalInterface {
    constructor (
        public nome: string, public idadeEmMeses: number, public penas?: boolean
    ) {
        super(nome, idadeEmMeses)
    }

    voa() {
        console.log(`${this.nome} voou`)
    }
}

const cachorro = new Animal('Mel', 10)
cachorro.comer()

const mosca = new AnimalVoador("Mosca X", 0.1, false)
mosca.comer()
mosca.voa()

export {}