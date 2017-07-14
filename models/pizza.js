var mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var PizzaSchema = new mongoose.Schema({
  pizzaName:{
    type:String,
    trim:true
  },
  pizzaQuantity:{
    type:Number,
  },
  customerName:{
    type:String,
    trim:true,
    minlength:1
  },
  customerEmail:{
    type:String,
    trim:true,
    minlength:1,
    unique:true,
  },
  pizzaType:{
    type:String,
    trim:true
  },
  tokens:[{
    token:{
      type:String,
      Required:true
    },
    access:{
      type:String,
      required:true
    }
  }]
});

PizzaSchema.methods.toJSON = function (){
  var pizza = this;
  var pizzaObject = pizza.toObject();
  return _.pick(pizzaObject,['pizzaName','customerName','customerEmail']);
}

PizzaSchema.methods.genAuthTokens = function (){
  var pizza = this;
  var access='auth';
  var token = jwt.sign({_id:pizza._id.toHexString(),access},'abc123').toString();

  pizza.tokens.push({
    access,
    token
  });

  return pizza.save().then(()=>{
    return token;
  });

};

var Pizza = mongoose.model('Pizza',PizzaSchema);

module.exports = {
  Pizza
};
