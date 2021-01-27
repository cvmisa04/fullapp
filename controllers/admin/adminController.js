const mongojs = require('mongojs')
const db = mongojs('fullapp',["users","gradovi","proizvodi"])


const adminController = (req,res)=>{

    let user = req.session.user;
    db.users.find({},(err,users)=>{
        db.gradovi.find({},(err,gradovi)=>{
            db.proizvodi.find({},(err,proizvodi)=>{

                let operater = users.filter(user => user.role == "operater");
                let savetnik = users.filter(user => user.role == "savetnik")

                res.render('admin/AdminDashboard',{
                    name: user.first_name,
                    gradovi: gradovi,
                    proizvodi: proizvodi,
                    operater: operater,
                    savetnici: savetnik

                })
            })
        })
    })
    
}


module.exports = adminController;