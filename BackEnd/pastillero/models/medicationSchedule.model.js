import mongoose from "mongoose";

const medicationScheduleSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    idPastillero: { 
        type: mongoose.Schema.Types.String,
        ref: 'pillBox',
        require: true
     },
    fhoraToma: {
        type: Number,
        default: 0        
    },
    frecuenciaDiaria: Object, //el objeto esta por hora y dia
  });