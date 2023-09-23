export interface Payment{
    id:Number,
    cartId:Number
    addressId:Number,
    total:Number,
    paymentMethod:String,
    date:String,
    status:String
}