import fs from "node:fs"
import path from "node:path"

import products from './produtos.json'
console.log(products)

const productJson = JSON.stringify([
    {
        "name": "Pair of Socks",
        "amountInStock": 100,
        "unitValue": 5
    },
    {
        "name": "T-Shirt",
        "amountInStock": 500,
        "unitValue": 45
    }
], null, 4) // numero da identação

const fileOutPath = path.join(__dirname, 'generated-products.json')
fs.writeFileSync(fileOutPath, productJson)

products.forEach(product => console.log(product))