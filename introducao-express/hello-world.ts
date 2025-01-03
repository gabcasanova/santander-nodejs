import express, { Request, Response } from 'express';
import { config } from 'dotenv'
import path from 'path';
import { readFileSync } from 'fs';

interface Iuser {
    name: string
    age: number
}

config()
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
const port = process.env.API_PORT;
const url = process.env.API_BASE_URL ?? "http://localhost";
const users: Iuser[] = [
    {
        name: 'Fulano',
        age: 20
    },
    {
        name: 'Ciclano',
        age: 35
    },
]

app.get('/api', (request: Request, response: Response) => {
    //const homePagePath = path.join(__dirname, 'home.html')
    //const homePage = readFileSync(homePagePath)
    return response.send('<h1>Hello world</h1>');
    //return response.status(200).send(homePage)
});

app.get('/api/users', (request, response) => {
    return response.json(users)
})

app.listen(port, () => {
    console.log(`Servidor rodando no endereco ${url}:${port}`);
});