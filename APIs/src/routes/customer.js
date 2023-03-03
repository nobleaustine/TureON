let customerModel = require('../models/customer.model')
let express = require('express')
let router = express.Router()

// create a new customer
// Post to localhost:3000/customer
router.post('/customer',(req,res)=>{

    //req.body
    if(req.body){
        return res.status(400).send("request body missing")

    }
    // input
    // let user ={
    //     name :'name'
    //     email: 'email@gamil.com'
    // }
let model = new customerModel(req.body)
model.save()
.then(doc=>{
    if(!doc || doc.length === 0){
        return res.status(500).send(doc)

    }
    res.status(201).send(doc)
})
.catch(err=> {
    res.status(500).json(err)
})
})

module.exports = router