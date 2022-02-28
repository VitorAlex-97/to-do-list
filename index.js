const express = require('express');
const path = require('path');
const route = require('./routes/routes');


const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(route);

app.listen(3000, () => console.log(`server at http://localhost:${port} is running`));