// REST API
/* 
El protocolo REST es una forma de escribir codigo relacionada al protocolo HTTP 
El protocolo HTTP permte la comunicacion entre varias computadoras 
Usamos HTTP pasa comunicarnos con las API por medio de protocolos GET, POST, DELETE, PUT 
Ademas HTTP nos devuelve un codigo de respuesta (por si la consulta fallo o no funciono etc...) ej: codigo 404
cuando todo sale bien, las API devuelven al cliente un JSON y un estado
un JSON es un objeto vcpon los datos solicitados de la base de datos
*/

import {pool} from "../db.js";

// las promessa async await reciben una solicitud y una respuesta como parametros
export const getTasks = async(req,res) =>{
    try{
        const [result] = await pool.query("SELECT * FROM tasks ORDER BY id ASC"); //el await es necesario para que la carga de los datos se haga en segundo plano y no obstaculice la carga de la aplicacion
        console.log("resultado: "+result[0]);
        res.json(result);
    }catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getTask = async(req,res) =>{
    try{
        
        const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [req.parasm.id]); //el await es necesario para que la carga de los datos se haga en segundo plano y no obstaculice la carga de la aplicacion
        console.log("resultado: "+result[0]);
        if (result.length === 0) {
            return res.status(404).json({message: "Task not found"});
        }    
        res.json(result[0]);
    }catch(error){
        return res.status(404).json({
            message: error.message
        })
    }

}
export const createTask = async(req,res) =>{
    try{
        const {title, description} = req.body;
        const [result] = await pool.query("INSERT INTO tasks(title,content) VALUES(?,?)", [title,description]); //el await es necesario para que la carga de los datos se haga en segundo plano y no obstaculice la carga de la aplicacion
        console.log("resultado: "+result);
        res.json({
            id: result.insertId,
            title,
            content
        });
    }catch(error){
        return res.status(404).json({
            message: error.message
        })
    }

}
export const editTask = async(req,res) =>{
    try{
        const [result] = await pool.query("SELECT * FROM tasks ORDER BY id ASC"); //el await es necesario para que la carga de los datos se haga en segundo plano y no obstaculice la carga de la aplicacion
        console.log("resultado: "+result[0]);
        res.json(result);
    }catch(error){
        return res.status(500).json({
            message: error.message
        })
    }

}
export const deleteTask = async(req,res) =>{
    try{
        const [result] = await pool.query("SELECT * FROM tasks ORDER BY id ASC"); //el await es necesario para que la carga de los datos se haga en segundo plano y no obstaculice la carga de la aplicacion
        console.log("resultado: "+result[0]);
        res.json(result);
    }catch(error){
        return res.status(500).json({
            message: error.message
        })
    }

}
// ESTO ES UN FORMATO DE JSON
/*
const ejJSON = {
    "id":1,
    "name":"Kevin Cotes",
    "Age": 27,
    "skills": {
        "php": "ok",
        "JS": "ok",
        "ppython": "none"
    }
}
*/

// no olvides que estas haciendo una API en NODE (JS)(JSON) --> clinte