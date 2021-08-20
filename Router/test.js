const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const jsonparser = bodyparser.json()
router.use(bodyparser.urlencoded({ extended: false }));

router.get("/test",(req, res) => 
{
    res.send("<p>Test Page</P>");
    console.log("normal-test");
});

router.get("/test/:id", (req, res) => 
{
  res.send(`<p>ID: ${req.params.id}</p>`);
  console.log("id-test");
});

router.post("/test",jsonparser,(req, res) => 
{
    req.body.server = true;
    res.json(req.body)
});

module.exports = router;
