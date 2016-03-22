var express=require('express'),
app=express();

app.use(express.static('public'));

var port = process.env.PORT || 8080;

var server=app.listen(port,function(req,res){
    console.log("Server is running at port: "+port);
});
