const express =require("express");
const app= express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
;

app.get("/cal",function(req,res)
{
    res.sendFile(__dirname+ "/index.html");
});
app.post("/cal",function(req,res)
{
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
     var re =num1+num2;
      
     res.send("the sum is ",+re);
});
app.listen(5000,function()
{
    console.log("server is working");
});