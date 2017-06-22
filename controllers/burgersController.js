var express = require("express");

var router = express.Router();

// Import the orm to use its database functions.
var db = require("../models");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burger.findAll({
    include: [{model: db.Eater}]
  }).then(function(data){
    //console.log(data);
    res.render("index", {
      burger: data
    });
  })
});

//Create burgers and eater
router.post("/", function(req, res) {
  db.Eater.create({
    eater_name: req.body.eater_name
  }).then(function(eater){
    //console.log(burger.eater_name);
    db.Burger.create({
      burger_name: req.body.burger_name,
      EaterId: eater.id
    }).then(function(burger){
      //console.log(eater.eater_name);
      res.redirect('/');
    });
  });
});

// to devour a burger
router.put("/:id", function(req, res) {
  db.Burger.update({
      devoured: req.body.devoured,
    }, {  
      where: {
        id: req.params.id
      }
    }).then(function(data){
      res.redirect('/');
    })
  });
  

// Export routes for server.js to use.
module.exports = router;
