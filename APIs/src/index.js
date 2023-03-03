//console.log('Hello') to print something to terminal
let express = require('express') //importing or using express
let app = express()              //creating an instance of express
let personRoute = require('./routes/person') //referencing the router we created
let customerRoute = require('./routes/customer')
let bodyParser =require('body-parser')


//static is a middleware order matter
// three parameters the extra one next is to call the next one in pipeline
// originalurl is an attribute of request 

//take a look at request and if it is
//application/json so data is json string take it as a json and
// create a property body and pass it there 
app.use(bodyParser.json())
app.use((req,res,next) =>{
    console.log(`${new Date().toString()} => ${req.originalUrl}`,req.body)
    //req.send('') can respond from here and break the pipeline or call next if not both request will time out 
    next() 
})
app.use(personRoute)// registering the route
app.use(customerRoute)
app.use(express.static('public')) //using function for displaying a static page it servers as a middleware
// handler for error 404 not found - resource not found
app.use((req,res,next)=>{
    res.status(404).send('we think you are lost kidding 4 step closer')
})


const PORT = process.env.PORT || 3000 // setting up environment port or default port 3000
app.listen(PORT,()=> console.info(`Server has started on port ${PORT}`)) //asking the app express object to listen to port 3000 and printing a message on terminal
