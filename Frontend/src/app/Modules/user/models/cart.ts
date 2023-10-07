import { Order } from "../../admin/models/order";
import { Product } from "../../admin/models/product";

export interface Cart{
    id:Number,
    productId:Number,
    quantity:number,
    userId:Number,
    product: Product,
    order: Order
}