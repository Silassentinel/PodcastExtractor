# PodcastExtractor

step1.
npm i

step2.
open podacst RSS copypaste into dataFile.xml

save

step3
edit routes.js file at line 30
1st argument sourcefile location (file must only contain ulrs)
2nd argument location where to store files

if unsuccesfull = wget -i sourcefileLocation -P destinationLocation

step4.
run via:

node index.js
