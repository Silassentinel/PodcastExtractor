// file IO operation 
// read the datafile
const importMeth = (filePath) => 
{
  let data;
  const fs = require("fs");
  try {
    console.log(fs.readFileSync(filePath, { encoding: "utf8" }))
   return data = fs.readFileSync(filePath, { encoding: "utf8" });
  } catch (err) {
    console.log(err);
  }
};
module.exports.importMeth = importMeth;