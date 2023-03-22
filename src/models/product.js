import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    price: {
        type: Number,
        required:true,
    },
    desc: {
        type: String,
        required:true,
    },
    status: {
        type: Boolean,
        required:true,
    },
    quantity: {
        type: Number,
        required:true,
    },
});

export default mongoose.model("Product",productSchema);