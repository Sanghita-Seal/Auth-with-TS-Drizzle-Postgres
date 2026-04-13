import express from "express";
import type { Express } from "express";

export function createApllication (): Express{
    const app = express()

    //middlewares

    //routes
    app.get('/', (req,res)=>{
        return res.json({message: 'Welcome to Chaicode auth service'})
    })

    return app;
}