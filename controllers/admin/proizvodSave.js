const mongojs = require('mongojs')
const db = mongojs('fullapp',["users","proizvodi"]) 


const saveProizvodi = (req,res)=>{
    let ime = req.body.ime_proizvoda;
    let cena = req.body.cena;

    db.proizvodi.insert({ime_proizvoda : ime, cena_proizvoda : cena},(err,doc)=>{
        //check err
        res.redirect('/admin')
    })
}


module.exports = saveProizvodi;