const express = require('express'); // require express
const app = express(); // express app
const port = process.env.PORT || 3000; // port
const routes = require("./Router/routes"); // magix happens here

app.use("/", routes); // make server use correct route
app.listen(port, () => { console.log(`listening on port : ${port}`); }); // start server
