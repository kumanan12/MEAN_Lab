/**
 * Created by Kumanan on 11/19/2014.
 */
/**
 * Created by Kumanan on 11/19/2014.
 */

var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

var port=3000;
app.set(process.env.PORT,port);
app.use(cors());
app.use(bodyParser());

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/jetbrains');

var Product = mongoose.model('Product', {name: 'string'});


/*
 var product = new Product({name: 'webstorm'});
 product.save(function (err) {
 if (err) {
 console.log("failed");
 } else {
 console.log("product saved");
 }
 });
 */
app.post('/add', function (req,res) {
    var name=req.body.name;
    var product = new Product({name: name});
    product.save(function (err) {
        if (err) {
            console.log("failed");
        } else {
            console.log("product saved");
            res.send();
        }


    });
})
app.get('/', function (req, res) {
    Product.find(function (err, products) {
        if(err) {
            console.log("error finding products");
        }
        res.send(products);
    });
} );
app.listen(port);
console.log("Express running on " + port);
