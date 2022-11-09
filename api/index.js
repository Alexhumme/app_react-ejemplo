import express from 'express' //express es un framework de node.js
import indexedRoutes from './routes/tasks.routes.js'
import cors from "cors"

const app  = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173/"
}))

//iniciamos las rutas en tasks
app.use(indexedRoutes);

app.listen(3000);
console.log(`Server on port ${3000}`)