import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true
    },
    price: {
        type: Number,
        required: true
    },
    userId: {
        type:String,
        required:true
    }
});

const Product = 
mongoose.models.Product || 
mongoose.model("Product", productSchema);

export default Product;