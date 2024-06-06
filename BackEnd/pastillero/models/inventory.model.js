import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
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
    pilssAmount: {
        type: Number,
        default: true        
    },
    repositionDate: {
        type: Date,
        default: new Date(0)        
    },
  });

  export default mongoose.model("Inventory", inventorySchema);