import Product from "../models/product";
import joi from "joi";

const productSchema = joi.object({
    name:joi.string().required(),
    price:joi.number().required(),
    desc:joi.string().required(),
    status:joi.boolean().required(),
    quantity:joi.number().required(),
})

export const create = async (req,res)=>{
    try {
        const {error} = productSchema.validate(req.body);
    if(error){
        res.status(400).json({
            message:error.details[0].message,
        })
    }
    const product = await Product.create(req.body);
    return res.status(200).json({
        message : "Thêm sản phẩm thành công",
        product
    })
    } catch (error) {
        res.status(400).json({
            message:error,
        })
    }
};
export const getAll = async (req,res)=>{
    try {
    const product = await Product.find();
    return res.status(200).json({
        product
    })
    } catch (error) {
        res.status(400).json({
            message:error,
        })
    }
};
export const get = async (req,res)=>{
    try {
    
    const product = await Product.findById(req.params.id);
    return res.status(200).json({
        product
    })
    } catch (error) {
        res.status(400).json({
            message:error,
        })
    }
};
export const update = async (req,res)=>{
    try {
        const {error} = productSchema.validate(req.body);
    if(error){
        res.status(400).json({
            message:error.details[0].message,
        })
    }
    const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).json({
        message : "Update sản phẩm thành công",
        product
    })
    } catch (error) {
        res.status(400).json({
            message:error,
        })
    }
};
export const remove = async (req,res)=>{
    try {
    
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({
        message : "Xóa sản phẩm thành công",
        product
    })
    } catch (error) {
        res.status(400).json({
            message:error,
        })
    }
};