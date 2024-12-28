import { Produto } from "./aula-01-classes"

interface EstabelecimentoInterface {
    endereco: string
    setor: string
    filaDeEspera: number

    retornaNomeDosProdutos: () => string[]
    diminuiFilaDeEspera(): void
}

interface ReceitaInterface {
    remedios: string[]
    identificacaoDoMedico: string
}

interface Remedio extends Produto {
    receitaObrigatoria?: boolean
}

interface FarmaciaInterface extends EstabelecimentoInterface {
    compraRemedioPrescrito: (
        receita: ReceitaInterface, produtosAComprar: string[]
    ) => void
}

class Estabelecimento implements EstabelecimentoInterface {
    protected _filaDeEspera = 10

    constructor(
        public endereco: string, 
        public setor: string, 
        protected produtos: Produto[],
        filaDeEspera?: number
    ) {
        this.filaDeEspera = filaDeEspera ?? this._filaDeEspera // valor padrão
    }

    retornaNomeDosProdutos(): string[] {
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

class Farmacia extends Estabelecimento implements FarmaciaInterface {
    constructor(
        public endereco: string, 
        public setor: string, 
        protected produtos: Remedio[],
        filaDeEspera?: number
    ) {
        super(endereco, setor, produtos, filaDeEspera)
    }

    public compraRemedioPrescrito(
        receita: ReceitaInterface,
        proutosAComprar: string[]
    ): void {
        const remediosDisponiveis = this.produtos.filter(
            produto => proutosAComprar.includes(produto.nome)
        )

        if (remediosDisponiveis.length === 0) {
            console.log('Infelizmente não temos os remédios em estoque...')
        }

        const remediosAutorizados = remediosDisponiveis.filter(
            produto => { 
                !produto.receitaObrigatoria ? true :
                receita.remedios.includes(produto.nome)
            }
        )
        
        console.log(remediosDisponiveis)
        console.log(remediosAutorizados)
    }
}

const supermercado = new Estabelecimento(
    'Rua dos Abomináveis 323 - bloco D', 
    'alimentação' , 
    [
        {nome: 'jaboticaba',  valor: 0.8 }, 
        {nome: 'banana',      valor: 10  }, 
        {nome: 'leite',       valor: 5   }, 
    ], 
    25
)

const farmaciaDoZe = new Farmacia(
    'Rua Heráclito Silva, 134',
    'Saúde',
    [
        {nome: 'Simeticona', valor: 1  },
        {nome: 'Dopanol',    valor: 0.2},
        {nome: 'Neosoro',    valor: 1.1, receitaObrigatoria: true},
        {nome: 'desodorante', valor: 1.2}
    ],
)

console.log(farmaciaDoZe.retornaNomeDosProdutos())

farmaciaDoZe.compraRemedioPrescrito({
    remedios: ['Neosoro', 'shampoo'],
    identificacaoDoMedico: '123-445-213'
}, ['desodorante'])

// não temos acesso diretamente no objeto instanciado a produtos e _filaDeEspera
//supermercado.produtos
//supermercado.filaDeEspera