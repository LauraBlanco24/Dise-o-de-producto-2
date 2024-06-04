import mongoose from "mongoose";

const registerTakePillSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    userID: { type: mongoose.Schema.Types.ObjectId },
    idPastilla: { type: mongoose.Schema.Types.ObjectId },
    fhRegistro: Number,
    estado: Boolean,
  });