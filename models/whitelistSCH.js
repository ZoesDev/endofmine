var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var whitelistSchema = new Schema( {
    username: String,
    email: String,
    approved: String,
    message: String,
    date: { type : Date, default: Date.now }
});

mongoose.model('whitelist', whitelistSchema);