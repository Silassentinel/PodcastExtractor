const importMeth = (filePath) => 
{
  let data;
  const fs = require("fs");
  try {
   return data = fs.readFileSync(filePath, { encoding: "utf8" });
  } catch (err) {
    console.log(err);
  }
};
module.exports.importMeth = importMeth;