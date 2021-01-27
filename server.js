const express = require('express')
const session = require('express-session');
    const app = express()
    app.set('view engine','ejs')
    const HALF_DAY = 1000 *60 *60 * 12;
    const {
        PORT='3000',
        NODE_ENV= 'development',
        SESS_NAME = 'sid',
        SES_SECRET= 'fullapp',
        SESS_LIFETIME= HALF_DAY

    } = process.env;
    const IN_PROD = NODE_ENV == 'production'


let routes = require('./routes')
app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.use(express.static(`${__dirname}/public`))
app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized :false,
    secret: SES_SECRET,
    cookie :{
        maxAge: HALF_DAY,
        sameSite: true,
        secure : IN_PROD
    }

}))

app.use('/',routes)




app.listen('3000',()=>{
    console.log('Slusamo na portu 3000')
})