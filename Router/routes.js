const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");

const importer = require("../importer");
const fileData = importer.importMeth("./dataFile.xml")

const urls = require("../jsExtractor")(fileData);
const downloader = require("../downloader");

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

router.get("/", (req, res) => 
{
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    urls.forEach(item =>  res.write(`<li><a target=”_blank” href="${item.toString()}">${item.toString()}</a></li>`));
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
});


// const linkList = importer.importMeth("./podcasts/BBC4FridayNightComedy.html")
// const urls2 = require("../jsExtractor")(linkList);

downloader.downloader('./podcasts/indiehacker.txt','/home/silas/Music/IndieHacker');

module.exports = router;
