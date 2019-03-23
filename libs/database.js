var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
const logger = require('morgan');
const dotenv = require('dotenv');
dotenv.load();
var uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true });

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
  logger('Mongoose default connection open to ' + uri);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  logger('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  logger('Mongoose default connection disconnected'); 
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    logger('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 





//load all files in models directory
fs.readdirSync('./models').forEach(function(filename) {
    if(~filename.indexOf('.js')) require(path.join(__dirname, '../', 'models', filename));
});

//export db inserting module
//databse.prototype.dbSave
module.exports = {
    dbSave: function(model,schema){
        const dbModel =  mongoose.model(model);
        const dbModelDB = new dbModel(schema);
        dbModelDB.save().catch( err => console.error('ERROR',err ));
    }
};