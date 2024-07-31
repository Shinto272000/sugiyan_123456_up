import express from "express"
import userRouter from "./userRoutes.js";
import insrtuctorRouter from "./instructorRoutes.js";
import courseRouter from "./courseRoutes.js";

const v1Router = express.Router()

v1Router.get("/",(req,res)=>{
    res.send("hello worldsss")
});

v1Router.use("/users",userRouter)
v1Router.use("/instructor",insrtuctorRouter)
v1Router.use("/courses", courseRouter)

export default v1Router