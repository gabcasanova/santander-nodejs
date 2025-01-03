import { Router } from "express"
import path from 'path';

import { readFileSync, writeFile, writeFileSync } from 'fs'
import { randomUUID } from 'crypto'
import dbJson from '.././server.json'
const dbJsonPath = path.resolve(process.cwd(), 'server.json')
const users: User[] = dbJson.users

type User = {
    id: string
    name: string
    age: number
}

type CreateUserDTO = Omit<User, "id">

const userRoutes = Router()

userRoutes.get('/api/users', (request, response) => {
    return response.json(users)
})

userRoutes.post('/api/users', (request, response) => {
    const {name, age}: CreateUserDTO = request.body
    
    if (!name || age < 0) {
        const errorMessage = "O usuário a ser criado precisa de nome e idade"
        return response.status(400).send(errorMessage)
    }

    const user = {id: randomUUID(), name, age}
    users.push(user)

    writeFileSync(dbJsonPath, JSON.stringify({...dbJson, users}, null, 2))

    return response.json(users)
})

userRoutes.put('/api/users', (request, response) => {
    return response.json(users)
})

userRoutes.delete('/api/users/:id', (request, response) => {
    const { id } = request.params

    if (!id) {
        const errorMessage = "O usuário a ser deletado precisa de ID"
        return response.status(400).send(errorMessage)
    }

    const foundUser = users.find(user => user.id === id)

    if (!foundUser) {
        const errorMessage = "O usuário com o ID não foi encontrado"
        return response.status(400).send(errorMessage)
    }

    const updateUsers = users.filter(user => user.id !== id)

    writeFileSync(dbJsonPath, JSON.stringify({...dbJson, users: updateUsers}, null, 2))

    return response.status(204).json()
})

export {userRoutes}