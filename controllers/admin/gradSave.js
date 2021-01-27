const mongojs = require('mongojs')

const db = mongojs ('fullapp',["users","gradovi"])

const saveGrad = (req,res)=>{

    let ime_grada = req.body.ime_grada;
    let zip = req.body.zip;

    db.gradovi.insert({ime_grada : ime_grada,zip: zip},(err,data)=>{

        if(err){
            //err
        }else{
            res.redirect('/admin')
        }
    })

}





module.exports =saveGrad;