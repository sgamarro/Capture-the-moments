const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const path = require('path')
const nodemailer = require('nodemailer');
 require('dotenv').config();
let password = process.env.PASSWORD_KEY

app.use(express.urlencoded({ extended: false}))
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")))

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, "./public/index.html"))
})
app.get('/bio', (req,res) =>{
    res.sendFile(path.join(__dirname, "./public/bio.html"))
})
app.get('/galeria', (req,res) =>{
    res.sendFile(path.join(__dirname,"./public/galeria.html"))
})
app.get("/contacto", (req,res)=>{
    res.sendFile(path.join(__dirname, "./public/contacto.html"))
})

app.post('/contact/send', function(req,res){
    var trasporter = nodemailer.createTransport({
        service:"Gmail",
        auth:{
            user: 's.albertogamarro5@gmail.com',
            pass: password
        }
    })
    var mailOptions ={
        from: 'Sebastian <s.albertogamarro5@gmail.com>',
        to:'s.albertogamarro5@gmail.com',
        subject: 'Website Submission',
        text: 'You have a submission with the following details... Name: '+req.body.name+'Email: '+req.body.email+ 'Message: '+req.body.message,
        html: '<p>You have a submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
    };
trasporter.sendMail(mailOptions, function(error,info){
    if (error){
        console.log(error);
        res.redirect('/'); 
    }else{
        console.log('message was sent');
       res.redirect('/')
    }
})
    
})

app.listen(port, () =>{
    console.log(`Server working on host:${port}`)
})