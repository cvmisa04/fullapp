const mongojs = require('mongojs')
const db = mongojs('fullapp',['termini'])


const newTerminController = (req,res)=>{
let user = req.session.user
    db.termini.insert({
        ime_stranke : req.body.ime_stranke,
        prezime_stranke: req.body.prezime_stranke,
        godiste_stranke : req.body.godiste_stranke,
        ime_supruznika: req.body.ime_supruznika,
        prezime_supruznika: req.body.prezime_supruznika,
        godiste_supruznika: req.body.godiste_supruznika,
        fiksni_telefon: req.body.fiksni_telefon,
        mobilni_telefon: req.body.mobilni_telefon,
        adresa: req.body.adresa,
        datum_zakazivanja: req.body.datum,
        vreme_termina: req.body.vreme,
        savetnik_full: req.body.savetnik,
        grad: req.body.grad,
        deca : req.body.imena_dece,
        operacija: req.body.operacije,
        terapija: req.body.terapija,
        napomena: req.body.napomena,
        active: true,
        vrednost_ugovora: 0,
        razlog: "",
        ulaz: false,
        proizvod: "",
        operater: user.first_name + " " + user.last_name



    },(err,doc)=>{
        
      res.redirect('/operater')
    })
    
}

module.exports=newTerminController;