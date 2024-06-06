import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    countryName: {
        type: String,
        require: true        
    },
    countryCode: {
        type: String,
        require: true        
    },
  });

  export default mongoose.model("Country", countrySchema);