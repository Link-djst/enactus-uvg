// app/models/salida.js
// require
var mongoose = require('mongoose');

// JSON para mongoDB
var salidaScheme = mongoose.Schema({

    salida            : {
        email           : String,
        user_type       : String,
        fecha           : String,
        duracion        : String,
        motivo          : String,
    },

});


// crear modelo de DB y pasar al app
module.exports = mongoose.model('salida', salidaScheme);
