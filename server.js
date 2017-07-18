// Dependencies
const express = require("express")
const routes = require("./routes")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose") 
const path = require("path")   
const PORT = process.env.PORT || 3000;
const app = express()
const GoogleAuth = require('google-auth-library')
const auth = new GoogleAuth
const CLIENT_ID = ["904019024650-eaprlckr58veqebrbnlssik6uap05rl8.apps.googleusercontent.com"]
const client = new auth.OAuth2(CLIENT_ID, '904019024650-uabutl82072at99jkqdpc31ma8cf3rsj.apps.googleusercontent.com')

// serve public files as static
app.use(express.static(path.join(__dirname, "public")));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// use ES6 promises with mongoose
mongoose.Promise = global.Promise;
// localhost connection uncomment for localhost
if(process.env.NODE_ENV !== 'test'){
mongoose.connect("mongodb://localhost/pulse");
// heroku mLabs connection uncomment for heroku deployment
// mongoose.connect("mongodb://heroku_t1bvzddm:ae2stotm309klscmhlvuajjv1g@ds151242.mlab.com:51242/heroku_t1bvzddm")
}
mongoose.connection
  .on("error", (error) => {
    console.log("Mongoose Error: ", error);
  })
  .once("open", () => {
    console.log("Mongoose connection successful.");
  });

// // cors config cors is a browser issue and may not be a problem later
// var whitelist = ['https://pulse-alert.herokuapp.com', 'http://pulse-alert-api.herokuapp.com'];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error("Not allowed by CORS " + origin))
//     }
//   }
// };
// app.use(cors());


app.use('/', routes);

// follow up middleware set to handle errors
app.use((err, req, res, next)=>{
  res.status(400).json(`ERROR: ${ err.message }`)
})


// starting express app
  app.listen(PORT, function() {
   
    console.log("App listening on PORT " + PORT);
  });
