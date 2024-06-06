import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    _id:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    userID: { 
        type: mongoose.Schema.Types.String,
        ref: 'User',
        require: true
     },
    fullName: {
        type: String,
        require: true        
    },
    specialty: {
        type: String,
        require: true        
    },
    address: {
        type: String,
        require: true        
    },
  });

  export default mongoose.model("Doctor", doctorSchema);