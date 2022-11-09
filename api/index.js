import express from 'express' //express es un framework de node.js
import indexedRoutes from './routes/tasks.routes.js'

const app  = express();

app.use(indexedRoutes);

app.listen(3000);
console.log(`Server on port ${3000}`)