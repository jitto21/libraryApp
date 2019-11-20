var express = require('express');
const authorsRouter = express.Router();

var authors=[
    {
        name:'J.K Rowling',
        age:52,
        about:'Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL, better known by her pen name J. K. Rowling, is a British author, film producer, television producer, screenwriter, and philanthropist.',
        image:'jk.jpg'
    },
    {
        name:'Leo Tolstoy',
        age:'NA',
        about:'Count Lev Nikolayevich Tolstoy, usually referred to in English as Leo Tolstoy, was a Russian writer who is regarded as one of the greatest authors of all time.',
        image:'leo.jpg'
    },
    {
        name:'R.L Stine',
        age:42,
        about:'Robert Lawrence Stine, sometimes known as Jovial Bob Stine and Eric Affabee, is an American novelist, short story writer, television producer, screenwriter, and executive editor.',
        image:'rl.jpg'
    },
    {
        name:'Carolyn Keene',
        age:72,
        about:'Carolyn Keene is the pseudonym of the authors of the Nancy Drew mystery stories and The Dana Girls mystery stories, both produced by the Stratemeyer Syndicate. In addition, the Keene pen name is credited with the Nancy Drew spin-off, River Heights, and the Nancy Drew Notebooks.',
        image:'caro.jpg'
    },
];
function router(nav){
    authorsRouter.route('/')
    .get((req,res)=>{
        res.render("authors.ejs",{nav,title:'Authors',authors});
    })

    authorsRouter.route('/:id')
    .get((req,res)=>{
        var i=req.params.id;
        res.render("author.ejs",{nav,author:authors[i]})
    })

    return authorsRouter;
}
module.exports= router;
