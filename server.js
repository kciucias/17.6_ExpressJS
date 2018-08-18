var express = require('express');
var app = express();
app.use(express.static('assets'));

app.set('view engine', 'pug');
app.set('views','./views');


app.get('/', function (req, res) {
    res.render('main');
});


app.get('/auth/google', function(req, res){
    res.render('logged');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Sorry! Something went wrong:/')
});