const mongoose = require('mongoose');
const { DB_URL } = require('./config');
mongoose.connect(DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });
const db = mongoose.connection;
db.on('error', console.error.bind(console, `Database connection error`));
db.once('open', console.log.bind(console, `DB connected`));

module.exports = db;