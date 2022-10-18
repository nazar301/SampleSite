const mongoose = require('mongoose')

const mongoURI = 
// process.env.NODE_ENV === 'production' ? process.env.MONGODB_URL : 
'mongodb://localhost:27017/backend'

mongoose.connect( mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

.then(instance => {
    console.log(`connected to ${instance.connections[0].name}`)
})

.catch(err => console.log(`404 not found`, err))

module.exports = mongoose