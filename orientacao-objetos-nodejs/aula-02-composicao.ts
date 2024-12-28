/* class Animal {
    public nome: string
    public idadeEmMeses: number

    constructor(nome: string, idadeEmMeses: number) {
        this.nome = nome
        this.idadeEmMeses = idadeEmMeses
    }
} */

type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;
type AnimalProps = GConstructor<{nome: string, idadeEmMeses: number}>

function MixinVoa<TBase extends AnimalProps>(superClasse: TBase) {
    return class extends superClasse {
        constructor(...args: any) {
            super(args[0])
        }

        voa() {
            console.log(`${this.nome} voou`)
        }
    }
}

function MixinNada<TBase extends AnimalProps>(superClasse: TBase) {
    return class extends superClasse {
        constructor(...args: any) {
            super(args[0])
        }

        nada() {
            console.log(`${this.nome} nadou`)
        }
    }
}

function MixinAnda<TBase extends AnimalProps>(superClasse: TBase) {
    return class extends superClasse {
        constructor(...args: any) {
            super(args[0])
        }

        anda() {
            console.log(`${this.nome} andou`)
        }
    }
}

interface AnimalInterface {
    nome: string,
    idadeEmMeses: number
    comer: () => void
}

class Animal implements AnimalInterface {
    public nome: string
    public idadeEmMeses: number;

    constructor({nome, idadeEmMeses} : {nome: string, idadeEmMeses: number}) {
        this.nome = nome
        this.idadeEmMeses = idadeEmMeses
    }

    comer(): void{
        console.log(`${this.nome} se alimentou.`)
    }

    andar(): void{
        console.log(`${this.nome} andou.`)
    }
}

class AnimalVoadorAndadorNadador extends (MixinAnda(MixinNada((MixinVoa(Animal))))) {}

const cachorro = new (MixinAnda(Animal))({nome: "Mel", idadeEmMeses: 10})
cachorro.comer()
cachorro.anda()

const mosca = new (MixinVoa(Animal))({nome: "Mosca X", idadeEmMeses: 0.1})
mosca.comer()
mosca.voa()

const pato = new (MixinAnda(MixinNada((MixinVoa(Animal)))))({nome: "Bruce", idadeEmMeses: 35})
pato.comer()
pato.voa()
pato.anda()
pato.nada()

const pato2 = new AnimalVoadorAndadorNadador({nome: "Diego", idadeEmMeses: 35})
pato2.comer()
pato2.voa()
pato2.anda()
pato2.nada()

export {}