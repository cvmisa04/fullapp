const { resolveInclude } = require("ejs");

const express = require('express')

const router = express.Router();

router.use(checkAdmin)

router.get( '/',require("../controllers/admin/adminController"))
router.get('/create', (req,res)=>{

    res.render('admin/adminCreateForm')
})
router.post('/create/save',(require('../controllers/admin/saveControler')))

router.get('/create/grad',(req,res)=>{
    res.render('admin/createGrad')
})
router.get("/create/proizvod",(req,res)=>{
    res.render('admin/createProizvod')
})
router.get('/delete/user/:userId',require('../controllers/admin/deleteUserController.js'))
router.get('/delete/proizvod/:proizvodId', require('../controllers/admin/deleteProizvodController'))
router.get('/delete/grad/:gradId', require('../controllers/admin/deleteGradController'))
router.post('/create/grad/save', require('../controllers/admin/gradSave'))

router.post('/create/proizvod/save',require("../controllers/admin/proizvodSave"))

//savetnici

router.get('/savetnik/termini/:name',
require('../controllers/admin/terminiSavetnikController'))

function checkAdmin(req,res,next){
    let user = req.session.user;
    if(user){
        if(user.role == 'admin'){
            next()
        }else{
            res.redirect('/')
        }
    }else{
        res.redirect('/')
    }

}
module.exports=router;