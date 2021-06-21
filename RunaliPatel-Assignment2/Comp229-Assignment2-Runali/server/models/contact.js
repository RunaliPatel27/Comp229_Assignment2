let mongoose  = require('mongoose');

//create a model class for contacts
let contactModel= mongoose.Schema({
    name:String,
    number:String,
    email:String
},
{
    collection:"contacts"
});

module.exports = mongoose.model('Contact', contactModel);