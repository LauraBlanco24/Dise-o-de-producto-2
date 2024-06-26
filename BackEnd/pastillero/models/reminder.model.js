import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
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
    fHourTake: {
        type: Number,
        default: 0        
    },
    message: {
        type: String,
        required: true
    },
  });

  export default mongoose.model("Reminder", reminderSchema);