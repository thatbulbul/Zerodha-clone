const {model}=require("mongoose");

const {OrdersSchema}=require("../schemas/OrdersSchema");

const OrderModel=new Model("orders",OrdersSchema);

module.exports={OrdersModel};