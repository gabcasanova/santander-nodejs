import express, { Request, Response } from 'express';
import { config } from 'dotenv'
import path from 'path';
import { userRoutes } from './routes/UserRoutes';

config()
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
const port = process.env.API_PORT;
const url = process.env.API_BASE_URL ?? "http://localhost";

app.use(userRoutes)

app.get('/api', (request: Request, response: Response) => {
    //const homePagePath = path.join(__dirname, 'home.html')
    //const homePage = readFileSync(homePagePath)
    return response.send('<h1>Api Base Url</h1>');
    //return response.status(200).send(homePage)
});


app.listen(port, () => {
    console.log(`Servidor rodando no endereco ${url}:${port}`);
});