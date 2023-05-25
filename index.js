const express=require("express");
const bodyParser=require("body-parser");
const axios=require("axios");

const app=express();

var items=["Drink","Walk","Run"];
var newListItems=[];
 app.set("view engine", "ejs");
 app.use(bodyParser.urlencoded({extended:true}))
    app.use(express.static("public"));
app.get("/", function (req,res) {
    var today = new Date();
    let options={
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let day= today.toLocaleDateString("en-US",options)
  

res.render("list",{kindOfDay: day, newListItems: items});

})
app.post("/", function (req,res) {
    var item= req.body.newItem;
    items.push(item);
    res.redirect("/")    ;
})

app.listen(3000, function(){
    console.log("server running successfully on 3000 port");
})
