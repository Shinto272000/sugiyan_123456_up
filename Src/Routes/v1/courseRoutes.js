import express from "express"
import { upload } from "../../middlewares/uploadMiddlewares.js"
import courseController from "../../Controllers/courseController.js"
import authenticateIns from "../../middlewares/instructorMiddleware.js"

const courseRouter=express.Router()

courseRouter.post("/add-courses", upload.single("image"),courseController.createCourse)

courseRouter.get("/", authenticateIns, courseController.getCourse)

courseRouter.put("/:id",courseController.updateCourse)

courseRouter.delete("/:id",courseController.deleteCourse)


export default courseRouter