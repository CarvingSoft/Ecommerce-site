import { Brand } from "./brand";
import { Category } from "./category";

export interface Product{
    id:Number,
    name:string,
    brandId:Number,
    description:string,
    price:Number,
    categoryId:Number,
    stockId:Number,
    cloudinary_id:string,
    file_url:string,
    brand:Brand,
    category:Category
}