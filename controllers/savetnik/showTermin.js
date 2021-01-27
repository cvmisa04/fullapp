const mongojs = require('mongojs')
const db = mongojs('fullapp', ['termini'])


const showTermin = (req, res) => {
    let user = req.session.user;
    let id = req.params.id;

    db.termini.find({ _id: mongojs.ObjectId(id) }, (err, termin) => {
        res.render('savetnik/termin', {
            name: user.first_name,
            termin: termin[0]
        })
    })

}

module.exports = showTermin;