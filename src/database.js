const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/mongodatabase')
    .then(db => console.log('Database is conected to', db.connection.host))
    .catch(e => console.log('Error', e))