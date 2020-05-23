const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
	name:{
		type:String,
		required:true
	},
	description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});
module.exports = CartItem = mongoose.model('cartitem',CartItemSchema);