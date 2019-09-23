const PORT = 8080;

const express = require('express');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.use(express.static(__dirname + "/app/assets/css"));
// app.use(express.static(__dirname + "/app/assets/javascript")); 

require('./app/routes/apiRoutes.js');
require('./app/routes/htmlRoutes.js');

app.listen(PORT,function(){
    console.log('App listening on PORT: ' + PORT);
});
