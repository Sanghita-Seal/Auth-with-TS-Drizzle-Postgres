import express from "express";
import type { Express } from "express";
import { authRouter } from "./auth/routes";

export function createApllication (): Express{
    const app = express()

    //middlewares
    app.use(express.json())

    //routes
    app.get('/', (req,res)=>{
        return res.json({message: 'Welcome to Chaicode auth service'})
    })

    app.use('/auth', authRouter)

    return app;
}