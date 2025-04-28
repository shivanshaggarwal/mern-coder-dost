const mongoose = require("mongoose");
const { Schema } = mongoose;


// ProductsSchema
const productSchema = new Schema({
    title: {type:String, required:true},
    description: String,
    price: {type:Number, min:[0,'wrong min price'],max:[500000,'wrong max price'], required:true},
    discountPercentage: {type:Number, min:[0,'wrong min discount'],max:[50,'wrong max discount']},
    rating: {type:Number, min:[0,'wrong min rating'],max:[5,'wrong max rating']},
    brand: {type:String, required:true},
    category: {type:String, required:true},
    thumbnail: String,
    images: [ String ]
});


// Models
exports.Product = mongoose.model('Product', productSchema);