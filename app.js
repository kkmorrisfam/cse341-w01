const express = require('express')
const app = express()
require("dotenv").config();
const {connectDB} = require('./db/connect')
const professionalRoute = require('./routes/professional')

console.log("loading routes...")

// app.use(static)
app.use(express.static('public'));

app.use('/', professionalRoute);

//test
// app.use('/', (req, res, next) => {
//     console.log('base route')
// });

//this renders the home page here within the route
// app.get("/", function(req, res){
//     console.log("get index")
//   res.render("index", {title: "Home"})
// })


// File Not Found Route - must be last route in list
// app.use(async (req, res, next) => {
//     // console.log("in server.js file; app.use, file not found")
//    next({status: 404, message: 'Sorry, we appear to have lost that page.'})
//  })



/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 3000;
const host = process.env.HOST;


/* ***********************
 * Connect to Database 
 * Log statement to confirm server operation
 *************************/
const start = async () => {
  try{
    await connectDB(process.env.MONGO_URI);   

    app.listen(port, () => {
      console.log(`app listening on ${host}:${port}...`)
    })    
    
  } catch (error) {
    console.error("Failed to start server: ", error)
  }
}

start();