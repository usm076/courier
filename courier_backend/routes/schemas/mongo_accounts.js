const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema
({
    user_id : String, 
    address: String, 
    address_two : String, 
    currency_id : String, 
    
});
//mongoose.model('email_verification', {user_id : String, email: String, pin : String, verified : Boolean, expiryAt : Date});

//mongoose.connect('mongodb://localhost:27017/wallet', {useNewUrlParser: true, useUnifiedTopology: true});

//const User = mongoose.model('user', { name: String, email : String, pass : String, verified : Boolean });

module.exports = mongoose.model('accounts', accountSchema);