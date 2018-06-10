var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    
    firstname:{
        type:String,
        required :true
    },
    lastname:{
        type: String,
        required :true
    },
    age:{
        type:Number
        
    },
    gender:{
        type:String
    },
    create_date:{
    type : Date,
        default: Date.now
    
}
});

var Users = module.exports = mongoose.model('Users',userSchema);

module.exports.addUser = function(users, cb){
    Users.create(users,cb);
}