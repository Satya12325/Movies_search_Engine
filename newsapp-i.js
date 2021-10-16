
const loadNews = async ()=>{
    try{

        const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=580d15109e05443e8720632239187a64`)
        const data = await res.json();
        console.log(data);
        showData(data);
    }
    catch(err)
    {

    }
}

function showData(data){
    const result = document.getElementById("container");
    result.innerHTML = "";
        result.innerHTML = data.articles.map((news)=>{
            return `
            <div class="news-item">
            <h2>${news.title}</h2>
            <img src="${news.urlToImage}" alt="${news.title}">
            <p class="author">Author: ${news.author}</p>
            <p class="news-description">${news.content}</p>
            </div>`
        })

 }
 loadNews()