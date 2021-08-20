let toFilter;
let filtered
const extract= () => 
{
    toFilter =  Document.querySelectorAll("span .html-attribute-value");
    filtered = tofilter.filter(item => {if(item.includes(".mp3"){return item}});
}