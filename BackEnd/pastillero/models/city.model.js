import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    countryID: { 
        type: mongoose.Schema.Types.String,
        ref: 'Country',
        require: true
     },
    nameCity: {
        type: String,
        require: true        
    },
    cityCode: {
        type: String,
        require: true        
    },
  });
  
  export default mongoose.model("City", citySchema);