const mongojs = require('mongojs')
const db = mongojs('fullapp',["termini"])


const savetnikController = (req,res)=>{
    const user = req.session.user;
    
    db.termini.find(
        {savetnik_full: user.first_name+" "+user.last_name,active:true},
        (err,ter)=>{
       if(err){
           res.redirect('/')
       }else{
        res.render('savetnik/index',{
            name: user.first_name,
            ter: ter
        
        })
       }
        
    })

}

module.exports = savetnikController;