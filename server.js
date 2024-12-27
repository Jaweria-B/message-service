const express = require('express')
const bodyParser = require("body-parser");
const app = express()

app.use(bodyParser.urlencoded({extended: true}));

// app.use("/index.html", express.static(__dirname + 'index.html'));
app.use(express.static(__dirname));

var messages = [
    {
        name: "Tim",
        message: "Hi"
    }
    ,
    {
        name: "Jane",
        message: "Hi"
    }
]

var server = app.listen(3000, () =>{
    console.log('Server is running on port: 3000', server.address().port)
})
app.get('/', function (req, res) {
    // res.render('/index');
    res.sendFile(__dirname + '/index.html');
})
app.get('/messages', function (req, res) {
    res.send(messages);
})