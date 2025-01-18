// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const logger = require("morgan");

// CREATE EXPRESS APP
// Here you should create your Express app:

const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

app.use(express.static("public"));
app.use(express.json());
app.use(logger("dev"));

// ROUTES
// Start defining your routes here:
app.get("/", (req, res)=>{
    console.log("Esta es la request de GET /");
    res.sendFile(__dirname+"/views/home.html")
    }
)

app.get("/blog")

// START THE SERVER
// Make your Express server listen on port 5005:

const PORT = 5005;
app.listen(PORT, () => {
    console.log("Listening on Port 5005");
    console.log(__dirname);
});
