import mongoose from "mongoose";

const pillSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    name: {
        type: mongoose.Schema.Types.String,
        require: true
    },
    pillBoxID: {
        type: mongoose.Schema.Types.String,
        ref: 'PillBox',
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
        type: mongoose.Schema.Types.String,
        ref: 'laboratiry',
        require: true
    },
    dosage: [String]
});

const pillModel = mongoose.model("Pill", pillSchema)

export { pillSchema, pillModel };