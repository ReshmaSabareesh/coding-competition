var express = require("express");
var bodyParser = require('body-parser')
var cors = require('cors');
const nodemailer = require('nodemailer');

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/',function(req,res){
    console.log(req);
    res.send("Welcome to Coding Competition #2 by Reshma E R,Norka FSDb1");
});


app.get("/home",(req,res)=>
{
    res.sendFile("./public/home");
});
app.post("/send_email",(req,res)=>{
        const email = req.body.email;
        const message = {
            from: 'reshmaedukat@gmail.com', // Sender address
            to: email,         // List of recipients
            subject: 'Hello How r u??', // Subject line
            text: 'simple code challenge!' // Plain text body
        };
        let transport = nodemailer.createTransport({
            service:'gmail',
            auth: {
               user: 'reshmasabari87@gmail.com',
               pass: 'Reshma@1992'
            }
        });
        
        transport.sendMail(message, function(err, info) {
            if (err) {
              console.log(err)
            } else {
              console.log(info);
              return res.send("success");
            }
        });
    
})



app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
