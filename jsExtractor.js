let podcastUrls= [];
let temp = []
// function will return the mp3 urls
module.exports = extractUrlsContainingMP3= (data) =>
{
    const dataArray = data.split('\n');
    dataArray.map(item => 
        {
            if(item.includes(".mp3"))
            {
                temp.push(item)
            }
        });
        filterStringsOnMP3(temp);
        return podcastUrls;
}
// function will search and add urls containing mp3 string
const filterStringsOnMP3 = (data) => 
{
    data.map(item => 
        {
            podcastUrls.push(item.substring(item.search("https"), item.search(".mp3")+4));
        })    
}
