import express from "express" 
import userController from "../../Controllers/userControllers.js" 

const userRouter=express.Router()

userRouter.get("/",userController.ping)  

userRouter.post("/signup",userController.signup) 

userRouter.post("/signin",userController.signin) 

userRouter.get("/check-user", userController.checkUser)





export default userRouter