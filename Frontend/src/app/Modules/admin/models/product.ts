import { Brand } from "./brand";

export interface Product{
    id:Number,
    name:String,
    brandId:Number,
    description:String,
    price:Number,
    categoryId:Number,
    stockId:Number,
    cloudinary_id:String,
    file_url:String,
    brand:Brand
}