const axios = require("axios");
const cheerio = require("cheerio");
let title,synopsis,detail


getContent = async (url) => {
    axios
    .get(url)
    .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);
        
        console.log("")
        //getting title from class movie-info-title and trim the space
        title = $(".movie-info-title").text().trim()
        console.log(title)
        console.log("")

        //getting all detail from movie-add-info and loop all list
        detail = $('.movie-add-info ul li').each(function(i, elm) {
            console.log($(elm).text())
        });
        console.log("")

        //getting synopsis from class movie-synopsis
        console.log("sinopsis")
        synopsis = $(".movie-synopsis").text().trim();
        console.log(synopsis)
    })
    .catch((error) => {
        console.log(error);
    })
};

//execute query
getContent('https://www.cgv.id/en/movies/info/21000800')