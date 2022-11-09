/*
createPool es un metodo que viene desde la libreria mysql2/promise y permite realizar la conexion
con la base de datos 
*/

import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '',
    database: 'task-db'
})