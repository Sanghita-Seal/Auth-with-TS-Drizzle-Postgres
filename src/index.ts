import { log } from "node:console"
import {createServer} from "node:http"
import { createApllication } from "./app"


async function main(){
    try {
        const server = createServer(createApllication())
        //I have a http server & I want express to handle my routes
        const PORT: number = 8080

        server.listen(PORT, ()=>{
            console.log(`HTTP server is running on PORT ${PORT}.`);
            
        })
    } catch (error) {
        console.log(`Error starting http server`);
        throw error;
        
    }
}
main()