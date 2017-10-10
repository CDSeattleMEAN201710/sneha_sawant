// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Require path
var path = require('path');
// Require and connect Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');


//Create your Mongoose Schemas
var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String,
    timestamp : String
   })
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'Quote'


// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})

// Add quote  
app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    console.log(req.body.name)
    console.log(req.body.quote)
    var quote = new Quote({name: req.body.name, quote: req.body.quote,timestamp: Date() });
    quote.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
          console.log('something went wrong');
          res.redirect('/');
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully added a quotes!');
          res.redirect('/quotes');
        }
    })

})

app.get('/quotes', function(req, res) {
    Quote.find({},function(err, quotes) {
        console.log(quotes)
        let context = {quotes:quotes}   
        res.render('quotes',context);
    })
    
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
