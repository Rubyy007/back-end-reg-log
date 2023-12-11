import mongoose from "mongoose"

const newSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true, 
    },
    password : String,
    email : String
})

const newModel = new mongoose.model("pr1",newSchema)

export default newModel
