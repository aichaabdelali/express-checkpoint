const express = require("express");
const app = express();
const port = 4000;

//checking server
app.listen(port, (err) => {
  if (err) console.log("server is not running");
  else console.log("server is running on port 4000...");
});

//verify the time of the request
app.use((req, res, next) => {
  console.log("Date:", Date());
  if (Date().toString().includes("Sat") || Date().toString().includes("Sun"))
    res.send("Sorry we're closed ... ");
  next();
});

//handling routes
app.use(express.static(__dirname + "/public"));
