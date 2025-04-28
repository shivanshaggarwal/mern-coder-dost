const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json','utf-8'));
const model = require('../model/product');
const mongoose = require("mongoose");
const Product = model.Product;

exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        console.log("Saved");
        res.status(201).json(req.body); // better to return the saved product
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: "Failed to create product", details: err.message });
    }
};

exports.getAllProducts = async (req,res)=>{
    const products = await Product.find();
    res.status(200).json(products);
}
exports.getProduct = async (req,res)=>{
    const id = req.params.id;
    const  product = await Product.findById(id);
    res.status(200).json(product);
}
exports.replaceProduct = async(req,res)=>{
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndReplace({_id:id},req.body, { runValidators: true, new:true })
        res.status(200).json(doc);
    }catch(err){
        console.log(err);
        res.status(400).json(err); 
    }
}
exports.updateProduct = async (req,res)=>{
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndUpdate({_id:id},req.body, { runValidators: true, new:true })
        res.status(200).json(doc);
    }catch(err){
        console.log(err);
        res.status(400).json(err); 
    }
}
exports.deleteProduct = async (req,res)=>{
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndDelete({_id:id})
        res.status(200).json(doc);
    }catch(err){
        console.log(err);
        res.status(400).json(err); 
    }
}