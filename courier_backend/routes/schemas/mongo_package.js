const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema
({
    r_name : String,
    r_nationalId : String,
    r_address : String, 
    r_contact : String,
    s_name : String,
    s_nationalId : String, 
    s_address : String, 
    s_contact : String,
    p_lenght : mongoose.Decimal128,
    p_height : mongoose.Decimal128,
    p_width : mongoose.Decimal128,
    createdOn : Date

}, { strict: false });
//mongoose.model('email_verification', {user_id : String, email: String, pin : String, verified : Boolean, expiryAt : Date});

//mongoose.connect('mongodb://localhost:27017/wallet', {useNewUrlParser: true, useUnifiedTopology: true});

//const User = mongoose.model('user', { name: String, email : String, pass : String, verified : Boolean });

module.exports = mongoose.model('packages', packageSchema);