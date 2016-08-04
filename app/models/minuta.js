// app/models/minuta.js
// require
var mongoose = require('mongoose');

// JSON para mongoDB
var minutaScheme = mongoose.Schema({

    minuta            : {
        email           : String,
        user_type       : String,
        fecha           : String,
        duracion        : String,
        motivo          : String,
    },

});


// crear modelo de DB y pasar al app
module.exports = mongoose.model('minuta', minutaScheme);
