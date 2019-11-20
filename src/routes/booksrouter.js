var express = require('express');
const booksRouter = express.Router();



var books = [
    {
        title: "War And Peace",
        genre:"Historical fiction",
        author:"Lev Nicolas",
        image:"wap.jpg"
    },
    {
        title: "Harry Potter",
        genre:"Fantasy fiction",
        author:"J.K Rowling",
        image:"hp.jpg"
    },
    {
        title: "Goosebumps",
        genre:"Short Story",
        author:"R.L Stine",
        image:"goose.jpg"
    },
    {
        title: "Nancy Drew",
        genre:"Crime thriller",
        author:"Donald Nick",
        image:"nancy.jpg"
    }
]

function router(nav){

    booksRouter.route('/')
    .get((req,res)=>{
        res.render("books.ejs",{nav,title:'Books',books});
    });

    booksRouter.route('/addbooks')
    .get((req,res)=>{
        res.render("addbooks.ejs",{nav,title:'Add a Book'})
    })
    booksRouter.route('/save')
    .post((req,res)=>{
        console.log(req.body);
       res.send("SUbmitted"); 
    })

booksRouter.route('/:id')
    .get((req,res)=>{
        var i = req.params.id; 
        res.render("book.ejs",{nav,book:books[i]});
    })
return booksRouter;
}



module.exports = router;
