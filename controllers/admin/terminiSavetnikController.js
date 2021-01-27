const mongojs = require('mongojs')
const db = mongojs('fullapp',['termini'])


const terminiSavetnikController = (req,res)=>{
let name = req.params.name;
let user = req.session.user;

db.termini.find({savetnik_full:name},(err,termini)=>{
    console.log(termini)
    res.render('admin/termini',{
        name: name,
        termini: termini
    })
})

}

module.exports=terminiSavetnikController;