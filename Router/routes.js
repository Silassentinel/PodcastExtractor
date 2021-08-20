const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");

const importer = require("../importer");
const fileData = importer.importMeth("./dataFile.xml")

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

router.get("/", (req, res) => 
{
    res.send(`<p>${fileData.toString()}</p>`);
});

module.exports = router;
