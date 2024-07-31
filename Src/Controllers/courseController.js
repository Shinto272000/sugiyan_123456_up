import { cloudinaryInstance } from "../config/cloudinaryConfig.js";
import Course from "../models/courseModel.js";

 const createCourse = async (req, res) => {
    try {
      console.log("hitted");
      if(!req.file) {
      return res.send("file is not visible")
      }
      cloudinaryInstance.uploader.upload(req.file.path, async (err, result) => {
        if (err) {
          console.log(err, "error");
          return res.status(500).json({
            success: false,
            message: "Error",
          });
        }

        console.log("result",result);
        
        const imageUrl = result.url;
  
        const { title, description, price, } = req.body;
  
        // const findInstructor = await Instructor.findOne({ email: instructorEmail });
  
        // if (!findInstructor) {
        //   return res.send("please add instructor first");
        // }
  
        const createCourse = new Course({
          title,
          description,
          price,
          // instructor: findInstructor._id,
          image: imageUrl,
        });
        
        
        const newCourseCreated = await createCourse.save();
        if (!newCourseCreated) {
          return res.send("course is not created");
        }
        return res.send(newCourseCreated);
      });
    } catch (error) {
      console.log("something went wrong", error);
      res.send("failed to create course");
    }
  };

  const getCourse = async(req,res)=>{

    try {
        const courses = await Course.find()
        return res.send(courses)
    } catch (error) {
        console.log("something went wrong", error);
      res.send("failed to fetch course");
        
    }
  }
  const updateCourse =async (req,res)=>{

    try {
      const {id} = req.params
      const {title,price,description} = req.body
      const updateCourse = await Course.findByIdAndUpdate(id,
        {
          title,
          price,
          description
        },
        { new: true}
      );
      return res.send(updateCourse)
    } catch (error) {
      
    }
  }

  const deleteCourse= async(req,res) =>{
    try {
      const {id} = req.params
      console.log(typeof id);
      const deleteCourse = await Course.deleteOne({id})
      if(!deleteCourse){
        return res.send("failed to delete ")
      }
      return res.send("deleted")
      
    } catch (error) {
      console.log("something went wrong", error);
      res.send("failed to fetch course");
    }
  }
    const courseController = {createCourse,getCourse,updateCourse,deleteCourse}
  export default  courseController 