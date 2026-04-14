import express from "express";
import type { Express } from "express";
import { authRouter } from "./auth/routes";
import { authenticationMiddleware } from "./auth/middleware/auth-middleware";

export function createApllication (): Express{
    const app = express()

    //middlewares
    app.use(express.json())
    app.use(authenticationMiddleware())

    //routes
    app.get('/', (req,res)=>{
        return res.json({message: 'Welcome to Chaicode auth service'})
    })

    app.use('/auth', authRouter)

    return app;
}