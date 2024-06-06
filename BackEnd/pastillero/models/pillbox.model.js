import mongoose from "mongoose";

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
    amount_pills: {
        type: Number,
        default: 0        
    },
    battery: {
        type: String,
        default: "100%"
    },
    date: {
        type: Date,
        default: new Date(0)
    },
    pilss: [String], // el objeto tiene los id de las pastillas
  });

  export default mongoose.model("PillBox", pastilleroSchema);