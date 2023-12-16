export interface Order{
    id:Number,
    userId:Number,
    addressId:Number,
    paymentMethod:string,
    cartId:Number,
    orderDate:string,
    deliveryCharge:Number,
    total:Number,
    orderStatus:string,
    paymentStatus:string,
    packedDate:string,
    shippedDate:string,
    deliveredDate:string,
    soldDate:string
}