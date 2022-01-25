// importing external libraries 
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

// setting a port 
const port = process.env.PORT||8000;

// setting express and static files 
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use(expressLayouts);

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});