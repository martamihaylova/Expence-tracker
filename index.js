const express = require('express');
const config = require('./config/config');
const app =  express();

require('./config/express')(app);
require('./config/mongoose');
console.log(process.env.NODE_ENV);

app.listen(config.PORT, console.log.bind(console, `Server listening on port ${config.PORT}...`));