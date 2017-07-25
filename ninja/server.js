require('dotenv').load();
const express  = require( 'express' ),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    bodyParser = require('body-parser'),
    app      = express();

// app.use(express.static(path.resolve('client')));
app.use(express.static(path.join( root, 'client' )));
app.use(express.static(path.join( root, 'bower_components' )));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(port, function() {
  console.log(`server running on port ${ port }` );
});
