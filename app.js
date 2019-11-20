var express = require('express');
var chalk = require('chalk');
var path = require('path');

var nav = [{link:'/books',title:'books'},{link:'/authors',title:'authors'},{link:'/books/addbooks',title:'Add Book'}]
var bodyParser = require('body-parser');
var authorsRouter = require('./src/routes/authorsrouter.js')(nav);
var booksRouter = require('./src/routes/booksrouter.js')(nav);

var app = new express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/authors',authorsRouter); //AUTHOR
app.use('/books',booksRouter); //BOOK
app.use(express.static(path.join(__dirname,"public")));

app.set("views","./src/views");
app.set("view engine", "ejs");




// app.get('/',function(req,res){
//     //res.send("Hello World 5000");
//     res.sendFile(path.join(__dirname,"src/views/index.html"));
// })
app.get('/',function(req,res){
    res.render("index.ejs",{nav,title:'Library Management System'});
})

// app.get("/books/:id",function(req,res){
//     var i = req.params.id; 
//     res.render("book.ejs",{nav,book:books[i]});
// })

app.listen(3000,function(){
    console.log(chalk.green("Listening to port ")+chalk.red(3000)+" .............")
});
