export type Produto = {
    nome: string,
    valor: number
}

/*class Estabelecimento {
    private endereco: string
    private setor: string
    private produtos: Produto[]

    constructor(endereco: string, setor: string, p: Produto[]) {
        this.endereco = endereco
        this.setor = setor
        this.produtos = p
    }
}*/

class EstabelecimentoBase {
    private _filaDeEspera = 10

    constructor(
        public endereco: string, 
        public setor: string, 
        private produtos: Produto[],
        filaDeEspera?: number
    ) {
        this.filaDeEspera = filaDeEspera ?? this._filaDeEspera // valor padrão
    }

    retornaNomeDosProdutos() {
        return this.produtos.map(produto => produto.nome)
    }
    
    get filaDeEspera() {
        return this._filaDeEspera
    }

    set filaDeEspera(fila: number) {
        if (fila <= 0) {
            return
        }

        this._filaDeEspera = fila
    }

    diminuiFilaDeEspera() {
        if (this._filaDeEspera === 0) {
            return
        }

        this._filaDeEspera -= 1
    }
}

// ------------------------------------------------------------------- //

const padaria = {
    endereco: 'Rua dos Laranjais 123 - bloco D',
    tipo:     'alimentação',

    produtos: [
        {nome: 'pão',         valor: 0.8 }, 
        {nome: 'arroz',       valor: 10  }, 
        {nome: 'leite',       valor: 5   }, 
        {nome: 'brigadeiro',  valor: 1.5 },
        {nome: 'carne moída', valor: -20}
    ],

    nomeDosProdutos() {
        return this.produtos.map(produto => produto.nome)
    }
}

const padaria3 = new EstabelecimentoBase(
    'Rua dos Abomináveis 323 - bloco D', 
    'alimentação' , 
    [
        {nome: 'jaboticaba',  valor: 0.8 }, 
        {nome: 'arroz',       valor: 10  }, 
        {nome: 'leite',       valor: 5   }, 
        {nome: 'brigadeiro',  valor: 1.5 },
        {nome: 'carne moída', valor: -20}
    ], 
    3
)

/*console.log(padaria)
console.log(padaria.nomeDosProdutos())
console.log(padaria3.retornaNomeDosProdutos())*/

padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
//padaria3.filaDeEspera=1      // não pode
padaria3.filaDeEspera = 1
console.log(padaria3.endereco)
console.log(padaria3.filaDeEspera)

