const express = require('express');
const path = require('path');
const routes = require('./routes/routes');
const conectToDb = require('./database/db');

conectToDb();
const app = express();
const port = 3000;


/**
 * Defines ejs as extension of the view
 */
app.set('view engine', 'ejs');

/**
 * Adding static files
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Allows to send forms from static files (index.ejs)
 */
app.use(express.urlencoded());


app.use(routes);

app.listen(3000, () => console.log(`server at http://localhost:${port} is running`));