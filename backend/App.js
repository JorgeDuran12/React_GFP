import express from "express";
import cors from "cors";

import db from "./database/db.js"
import routes from "./routes/routes.js"

const app = express()


app.use( cors())
app.use(express.json())
app.use('/public', routes)

try {
    await db.authenticate()
    console.log("conexion exitosa a la bd")
} catch (error) {
    console.log(`EL error de conexion es: ${error}`)
}

app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
})

app.listen(8000, ()=>{
    console.log('Server Up running in http://localhost:8000/');
})

