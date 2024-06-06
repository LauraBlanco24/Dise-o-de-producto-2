import mongoose from "mongoose";

const ubicationSchema = new mongoose.Schema({
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
    dateHour: {
        type: Number,
        require: true        
    },
    ubication: Object, //coordinatis lat, lon
  });

  export default mongoose.model("Ubication", ubicationSchema);