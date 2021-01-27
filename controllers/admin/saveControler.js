const mongojs = require('mongojs')
const db = mongojs('fullapp',['users'])

const saveControler = (req,res)=>{
    let ime = req.body.ime;
    let prezime = req.body.prezime;
    let pass = req.body.pass;
    let role = req.body.role;

    db.users.insert({first_name : ime, last_name: prezime,password: pass,role: role},(err,data)=>{
        if(err){
            //display err
        }else{
            res.redirect('/admin')
        }
    })

}


module.exports = saveControler;