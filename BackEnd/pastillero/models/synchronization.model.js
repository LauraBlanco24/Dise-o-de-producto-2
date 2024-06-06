import mongoose from "mongoose";

const synchronizationSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    pillBoxID: { 
        type: mongoose.Schema.Types.String,
        ref: 'PillBox',
        require: true
     },
    lastsynchronization: {
        type: Date,
        default: new Date(0)        
    },
  });

  export default mongoose.model("Synchronization", synchronizationSchema);