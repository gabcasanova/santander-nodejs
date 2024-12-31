import { Product } from "./aula-03-produtos";

const productAllOptional: Partial<Product> = {
    unitValue: 20
}

const productAllRequired: Required<Product> = {
    name: 'T-Shirt',
    amountInStock: 500,
    unitValue: 45,
    barcode: '121212124'
}
