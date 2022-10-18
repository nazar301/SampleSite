const User = require('../users/user')
express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

// get first page
router.get('/', (req,res) => {
    res.send('get it')
})

// get registration page
router.get('/register', (req,res) =>{
    res.send('register')
})


// send info to registration to register the user
router.post('/register', async (req, res, next) =>{
    try{

        // check password to see if they match

        if(req.body.password === req.body.verifyPassword) {
            const wantedUsername = req.body.username
            const userExists = await User.findOne({ username: wantedUsername})
        
            // checking to see if there is a user with the same name
        
            if(userExists) {
                    res.json({message: 'username taken, please try again'})
                    console.log('username taken please try again')

                // user can be created, hashing the password to register 
                } else {
                    const salt = bcrypt.genSaltSync(10)
                    const hashedPassword = bcrypt.hashSync(req.body.password, salt)
                    req.body.password = hashedPassword
                    const newUser = await User.create(req.body)
                    console.log(newUser)
                    
                    res.json({message: 'user created', newUser})
                    console.log(`User created ${newUser}`)
                }
                // error check 
        } else {
            console.log('sent no data recieved')
        }
    }

    // editional error check for the entire operation
    catch(err) {
        next(err)
    }
})


// login route 
router.get('/login', (req,res) =>{
    res.send('login here')
})


router.post('/login', async(req,res,next) => {
    // find the user
    try{
        const userLogin = await User.findOne({ username: req.body.username})
        console.log(userLogin)

        // check if the password and username match
        if(userLogin) {
        const validPassword = bcrypt.compareSync(req.body.password, userLogin.password)
        
            if(validPassword) {
            req.session.username = userLogin.username
            req.session.userLogin = true
            } else {
            next()
            console.log(next)
            }

            // check error
        } else{
            console.log('error not connected')
            // reroute to login
        }
    }

    // to see if there are errors connecting
    catch(err) {
        res.json(err)
        console.log(err)
        next(err)
    }
})

// terminate session
router.get('logout', (req,res) => {
    req.session.destroy()
    res.redirect('/')
})

module.exports = router