const mongojs = require('mongojs')
const db = mongojs('fullapp',['users'])


const deleteUserController = (req,res)=>{
let userId = req.params.userId;

db.users.remove({ '_id' : mongojs.ObjectID(userId)},(err,doc)=>{
    res.send('OK')
})


}


module.exports=deleteUserController;

