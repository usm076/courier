const { Double } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema
({
    acc_id : String, 
    fromUser : String,
    fromAddress : String, 
    to : String, 
    txn_hash : String,
    block_hash : String,
    block_number : String, 
    coins : String, 
    currency : String,
    timeStamp : Date
    
    
});
//mongoose.model('email_verification', {user_id : String, email: String, pin : String, verified : Boolean, expiryAt : Date});

//mongoose.connect('mongodb://localhost:27017/wallet', {useNewUrlParser: true, useUnifiedTopology: true});

//const User = mongoose.model('user', { name: String, email : String, pass : String, verified : Boolean });

module.exports = mongoose.model('transactions', transactionSchema);