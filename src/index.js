import express from "express"
import { people } from "./people"
 
const app = express()
const port = 3333

app.get("/", (request, response) => {
    response.json(people)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})