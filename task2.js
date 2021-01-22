const axios = require("axios");
const cheerio = require("cheerio");
let title,synopsis,detail

Patch = async (url) => {
    axios
    .get(url)
    .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);

        console.log("")
        title = $(".movie-info-title").text().trim()
        console.log(title)
        console.log("")

        detail = $('.movie-add-info ul li').each(function(i, elm) {
            console.log($(elm).text())
        });
        console.log("")

        console.log("sinopsis")
        synopsis = $(".movie-synopsis").text().trim();
        console.log(synopsis)
    })
    .then(()=>{
        
    })
    .catch((error) => {
        console.log(error);
    })
};

Patch('https://www.cgv.id/en/movies/info/21000800')