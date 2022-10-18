require('dotenv').config()
const express = require('express')
const app = express()
app.set('port', process.env.PORT || 4000)

const cors = require('cors')



const SESSION_SECRET = process.env.SESSION_SECRET

const userRoute = require('./controllers/sessions')

const session = require('express-session')

const messageController = require('./controllers/messageController')


app.use(
    session({
        secret: SESSION_SECRET, 
       
        resave: false,
        saveUninitialized: false,
    })
)


app.use((req, res, next) =>{
    res.locals.username = req.session.username;
    res.locals.loggedin = req.session.loggedin;
    next();
})
app.use((req,res,next) => {
    res.locals.message = req.session.message;
    req.session.message = '';
    next()
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// admin
// custom (untangible route)

app.use('/session', userRoute)

app.listen(app.get('port'), () => {
    console.log(`running on , ${app.get('port')}`)
})