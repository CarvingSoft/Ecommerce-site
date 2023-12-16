export interface Order{
    id:Number,
    userId:Number,
    cartId:Number,
    orderDate:string,
    deliveryCharge:Number,
    total:Number,
    orderStatus:string,
    packedDate:string,
    shippedDate:string,
    deliveredDate:string,
    soldDate:string
}