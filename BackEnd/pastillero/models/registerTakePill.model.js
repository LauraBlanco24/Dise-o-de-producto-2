import mongoose from "mongoose";

const registerTakePillSchema = new mongoose.Schema({
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
    fhRegistro: {
        type: Number,
        default: 0        
    },
    status: {
        type: Boolean,
        default: true        
    },
  });

  export default mongoose.model("RegisterTakePill", registerTakePillSchema);