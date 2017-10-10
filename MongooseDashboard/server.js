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
var AnimalSchema = new mongoose.Schema({
    name: String,
    type: String,
    age : String
   },{timestamps: true });
mongoose.model('Animal', AnimalSchema); 
var Animal = mongoose.model('Animal') 

// Routes
// Root Request
app.get('/', function(req, res) {
    Animal.find({},function(err,animals){
        console.log(animals)
        let context = {animals: animals}
        res.render('index',context);
        })
   
})

app.get('/new', function(req, res) {
    
    res.render('new');
})

app.post('/add', function(req, res) {
    console.log(req.body)
Animal.create(req.body);
    animal.save(function(err) {
        if(err) {
          console.log('something went wrong');
          res.redirect('/add');
        } else { 
          console.log('successfully added a animal!');
          res.redirect('/');
        }
 })
})

app.post('/edit/:id', function(req, res) {
Animal.find({_id: req.params.id},function(err,animal){
        console.log(animal)
        let context={animal : animal[0]}
        res.render('edit',context);
    })
    
})

app.post('/update/:id', function(req, res) {
Animal.update({_id : req.params.id}, req.body,function(err){
        if(err) {
            console.log('something went wrong');
            res.redirect('/edit/:id');
          } else { 
            console.log('successfully updated a animal!');
            res.redirect('/');
          }
    })

})

app.post('/delete/:id', function(req, res) {
Animal.remove({_id: req.params.id}, function(err){
    if(err) {
        console.log('something went wrong');
        res.redirect('/');
      } else { 
        console.log('successfully deleted a animal!');
        res.redirect('/');
      }
       })
})




// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
