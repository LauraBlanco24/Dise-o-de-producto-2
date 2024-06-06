import mongoose from "mongoose";
import { pillSchema, pillModel } from "./pill.model.js";

const pillBoxSchema = new mongoose.Schema({
    _id: {
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
     name:{
        type: String,
        default: "pilBox0"        
    },
    amountPills: {
        type: Number,
        default: 0        
    },
    battery: {
        type: String,
        default: "100%"
    },
    date: {
        type: Date,
        require: true
    },
    pilss: [pillSchema], // el objeto tiene los id de las pastillas
  });

  export default mongoose.model("PillBox", pillBoxSchema);