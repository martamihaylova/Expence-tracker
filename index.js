const express = require('express');
const routes = require('./config/routes');
const config = require('./config/config');
const errorHandler = require('./middleware/errorHandler');
const app =  express();

require('./config/express')(app);
require('./config/mongoose');
require('./config/routes')(app);
app.use(routes);
app.use(errorHandler);
console.log(process.env.NODE_ENV);

app.listen(config.PORT, console.log.bind(console, `Server listening on port ${config.PORT}...`));