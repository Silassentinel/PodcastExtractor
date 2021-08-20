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
            console.log(item.substring(item.search("http"), item.search(".mp3")+4));
            podcastUrls.push(item.substring(item.search("http"), item.search(".mp3")+4));
        })    
}
