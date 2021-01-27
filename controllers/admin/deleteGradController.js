const mongojs = require('mongojs')
const db = mongojs('fullapp',['gradovi'])


const deleteGradController = (req,res)=>{
    let gradId = req.params.gradId;

    db.gradovi.remove({_id : mongojs.ObjectID(gradId)},(err,doc)=>{
        res.send("OK")
    })
}


module.exports= deleteGradController;