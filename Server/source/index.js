//creating required objects
let express = require('express')
let app = express()
let bodyParser =require('body-parser')

const userRoute = require('./routes/user')


app.use(bodyParser.json());
app.use((req,res,next) =>{
    console.log(`${new Date().toString()} => ${req.originalUrl} `,req.body)
    next() 
})
app.use(userRoute);
app.use((req,res,next)=>{
    res.status(404).send('you are lost my friend......')
})

const PORT = process.env.PORT || 3000 
app.listen(PORT,()=> console.info(`Server has started on port ${PORT}......`)) 