var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    color: String,
    hashed_password: String,
    keychains: [{
        username: String,
        password: String,
        website: String   
    }]
});
mongoose.model('User', UserSchema);