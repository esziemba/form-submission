const express = require('express')
const app = express()
const { json } = require('body-parser')
const bodyParser = require('body-parser')

require('dotenv').config()
const PORT = process.env.PORT

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json())

app.get('/', function(req, res){
 res.render('form')
 res.sendFile("index.html") 
});

app.post('/',function(req,res){
   res.send(req.body);
});

// LISTEN
app.listen (PORT, () => {
    console.log('listening at port', PORT)
})
