import express from "express"
import serverConfig from "./config/serverConfig.js"
import dbConnection from "./config/dbConfig.js"
import apiRouter from "./Routes/index.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(
    cors(
        {
    origin:"http://localhost:5173", 
    credentials : true,
}
)
);
app.use(express.json())
app.use(cookieParser())

app.use("/api",apiRouter)
app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(serverConfig.POrt,()=>{
    console.log(`server is running at ${serverConfig.POrt}` );
    dbConnection();
    console.log("Db connected");
})