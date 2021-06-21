// required modules for the User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        //Validation for username and type stated
        username:
        {
            type: String,
            default: "",
            trim: true,
            required: 'username is required'
        },
        //Validation for email and type stated
       email:
       {
           type: String,
           default: '',
            trim: true,
            required: 'email address is required'
       },
       //Validation for email and type stated
       displayName:
       {
           type: String,
           default: '',
            trim: true,
            required: 'Display Name is required'
       },
       created:
       {
           type: Date,
           default: Date.now
           
       },
       update:
       {
           type: Date,
           default: Date.now
       },
    },
    {
        collection: "users"
    }
);

//configure options for User Model

let options = ({missingPasswordError: 'Password seems to be wrong or unentered!'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);