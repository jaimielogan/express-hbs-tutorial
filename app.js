const express = require("express");
const hbs = require("hbs");

let app = express();

app.set('view engine', 'hbs');
hbs.localsAsTemplateData(app);

app.locals.name = "Jaimie";

app.get("/", function(req,res){
  res.render('home', {
    // name: "Jaimie",
    // Name can now be removed since we defined it globally above
    foods: [
      "burgers",
      "chocolate",
      "more chocolate"
    ]
  });
});

app.get("/page2", function(req,res){
  res.render('page2');
});

app.listen(3000, function(){
  console.log("Listening to port",3000);
});
