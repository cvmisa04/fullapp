const express = require('express');

    const app = express()
const router = express.Router()

 router.get('/',(req,res)=>{
     req.session.destroy((err)=>{
         res.redirect('/')
     })
 })



module.exports=router;