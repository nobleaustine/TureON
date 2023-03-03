let express = require('express') //referencing express
let router = express.Router() // creating a router object

//querystring => query property on the request string
//the if help to pass localhost:3000/person?name=noble&no=6
router.get('/person', (req,res) =>{
    if(req.query.name){
        res.send(`you are 3 step closer ${req.query.name} and power is ${req.query.no}`)
    }
    else{
        res.send('you are 1 step closer')
    }
    
} ) // asking the router to get or go to /person and the request and response are req and res respectively here a response is send as a message

//params property on the request object
//localhost:3000/person/noble
router.get('/person/:name', (req,res) =>{
    res.send(`you are 2 step closer ${req.params.name}`)
} ) // : to match to a variable which is being send back

module.exports = router // exporting router to import into index file