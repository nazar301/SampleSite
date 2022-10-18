// const express = require('express')
// const router = express.Router()
// const Message = require('../models/messageSchema')

// // show router

// router.get('/', (req,res) => {
//     Message.find({}, (err, messages) => {
//         if (err) {
//             res.status(400).json({ err: err.message})
//         }
//         res.status(200).json(messages)
//     })
// })

// // post new message


// router.post('/', (req,res) => {
//     Message.create(req.body, (err, createdMessage) =>{
//         if(err) {
//             res.status(400).json({err: err.message})
//         }
//         res.status(200).json(createdMessage)
//     })
// })

// router.get('/:id', (req, res) => {
//     let id = req.params.id
//     Message.findById(id, (err, message) => {

//         if(err) {
//             res.status(400).json({err: err.message})
            
//         }

//         res.status(200).json(message)

//     })

// })

// // delete by id single message clear

// router.delete('/:id', (req, res) => {
//     console.log(req.params.id)
//     Message.findByIdAndDelete(req.params.id, (err, message) => {

//         if(err) {
//             res.status(400).json({err: err.message})
//             return
//         }
//             console.log('message deleted')
//         res.status(200).json(message)

//     })

// })

// // change message 

// router.put('/:id', (req, res) => {

//     Message.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedMessage) => {

//         if(err) {
//             res.status(400).json({err: err.message})
//         }

//         res.status(200).json(updatedMessage)        

//     })

// })


// module.exports = router