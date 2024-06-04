import mongoose from "mongoose";

const pillSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    pillBoxID: { 
        type: mongoose.Schema.Types.String,
        ref: 'pillBox',
        require: true
     },
    pillType: {
        type: String,
        required: true
    },
    weigth: {
        type: String,
        required: true
    },
    dimensions: {
        type: String,
        required: true
    },
    laboratory: {
        type: String,
        required: true
    },
  });