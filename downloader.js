const { exec } = require('child_process');


const downloadFiles = (sourceFile, location) => {
  exec(`wget -i ${sourceFile} -P ${location}`);
}
module.exports.downloader = downloadFiles;
