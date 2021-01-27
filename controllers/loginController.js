const express = require('express')
const mongojs = require('mongojs')
const db = mongojs('fullapp',["users"])


const loginController = (req,res)=>{
//preuzeti podatke
let nameIzForme = req.body.name;
let passIzForme = req.body.pass;

db.users.find({first_name : nameIzForme,password: passIzForme},(err,doc)=>{
    if(err){
        res.redirect('/')
        
    }else{
        if(doc.length === 1){
            let user = doc[0]
           req.session.user = user
       
            if(user.role == 'admin'){
                
                res.redirect('/admin')
            }else if(user.role == 'operater'){
                
                res.redirect('/operater')

            }else if (user.role == 'savetnik'){
                res.redirect('/savetnik')
                
            }
                
                
                else{
                res.redirect('/')
            }
            
        }else{
            res.redirect('/')
        }
    }
})

}

module.exports = loginController;