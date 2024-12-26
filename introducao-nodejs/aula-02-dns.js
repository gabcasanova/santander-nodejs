const dns = require('node:dns')

/*dns.resolve4(searchUrl, (err, addresses) => {
    if (err) {
        console.log('URL não encontrada.')
        return
    }

    console.log(addresses)
})*/

async function bootstrap() {
    const searchUrl = 'google.com'

    console.time("pesquisando URL por DNS padrão")
    const addresses = await dns.promises.resolve4(searchUrl)
    console.timeEnd("pesquisando URL por DNS padrão")
    console.log(addresses)

    const nameServers = await dns.promises.resolveNs(searchUrl)
    console.log(nameServers)
    
    const ipNs = await dns.promises.resolve4(nameServers[1])

    const resolver = new dns.Resolver()
    resolver.setServers(ipNs)

    console.time("pesquisando URL por DNS específico")
    const addressesWithResolver = resolver.resolve4(searchUrl, (error, addresses) => {
        if (error) {
            console.error("Não foi possível encontrar ipv4")
        }
        console.timeEnd("pesquisando URL por DNS específico")
        console.log(addresses)
    })
}

bootstrap()


