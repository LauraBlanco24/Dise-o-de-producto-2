import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
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
     pillBoxID: { 
        type: mongoose.Schema.Types.String,
        ref: 'PillBox',
        require: true
     },
    fhNotification: {
        type: Number,
        default: true        
    },
    notificationType: {
        type: String,        
    },
    notificationText: {
        type: String       
    },
  });
  
  export default mongoose.model("Notification", notificationSchema);