const queryString = require(`node:querystring`)
const url = require(`node:url`)

const baseurl = `https://siteviagem.com.br`

const uri = queryString.stringify({
    destino: `Rio de Janeiro`,
    periodo: `verão`
})

const fullurl = `${baseurl}/${uri}`
console.log(fullurl)

const parsedUri = queryString.parse(uri)
console.log(uri)
console.log(parsedUri)
console.log(parsedUri.destino)
console.log(url.parse(fullurl))


const uri2 = queryString.escape(`São Paulo`)
console.log(uri2)
const unescapedUri2 = queryString.unescape(uri2)
console.log(unescapedUri2)