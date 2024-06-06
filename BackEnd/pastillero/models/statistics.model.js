import mongoose from "mongoose";


const statisticsSchema = new mongoose.Schema({
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
    dataStatistics: {
        type: Object,
        require: true       
    },
    
  });

  export default mongoose.model("Statistics", statisticsSchema);