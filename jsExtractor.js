let toFilter;
let filtered
let podcastUrls= [];

const extract= (data) => 
{
    toFilter =  Document.querySelectorAll("span .html-attribute-value");
    filtered = tofilter.filter(item => 
        {
            if(item.includes(".mp3"))
            {return item}
        });
}

module.exports.extrator = extract;