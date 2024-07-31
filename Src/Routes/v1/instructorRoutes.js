import express from "express"
import instructorcontroller from "../../Controllers/instructorControllers.js"
import authenticateIns from "../../middlewares/instructorMiddleware.js"

const insrtuctorRouter=express.Router()

insrtuctorRouter.post("/signup",instructorcontroller.singup)
insrtuctorRouter.post("/signin",instructorcontroller.singin)
insrtuctorRouter.delete("/:id",instructorcontroller.removeInstructor)
insrtuctorRouter.get("/get-instructors",instructorcontroller.getAllInstructors)
insrtuctorRouter.get("/check-instructor", authenticateIns, instructorcontroller.checkAdmin ) 



export default insrtuctorRouter 