const mongoose = require('mongoose')

mongoose.connect('mongodb://mongodbapp/mydatabase') //service de compose
    .then(db => console.log('DB is connected to ', db.connection.host))
    .catch(err => console.error(err))