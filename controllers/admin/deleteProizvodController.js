const mongojs = require('mongojs')
const db = mongojs('fullapp',['proizvodi'])



const deleteProizvodiController = (req,res)=>{
    let proizvodId = req.params.proizvodId;
    db.proizvodi.remove({_id : mongojs.ObjectID(proizvodId)},(err,doc)=>{
        res.send("OK")
    })
}


module.exports= deleteProizvodiController;