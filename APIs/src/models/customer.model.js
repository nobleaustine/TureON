let mongoose = require('mongoose')

const dbUrl = "mongodb+srv://demoAPI:demoAPI123@cluster0.06y9trh.mongodb.net/?retryWrites=true&w=majority"
const connectionParams ={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
// connecting to mongodb cloud atlas server
mongoose.connect(dbUrl,connectionParams)
const db = mongoose.connection;

//checking connection
db.on("error", console.error.bind(console,"connection error : "));
db.once("open",function(){
    console.log("connected successfully");
});

// attributes of the database
let customerSchema = new mongoose.Schema({

    name: String,
    email: {
        type: String,
        require: true,
        unique: true

    }


})
module.exports = mongoose.model('customers',customerSchema)