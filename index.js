const app = require("express")();
const helper = require("./helper");
const port = process.env.PORT || 5000;

app.get("/", (req, res) =>
  res.json({
    success: true,
    message: "Service Is Running",
  })
);
app.get("/api/home", helper.home);
app.get("/api/anime/:id", helper.anime);
app.get("/api/eps/:id", helper.episode);
app.get("/api/lengkap/:id", helper.lengkap);
app.get("/api/search/:query", helper.search);
app.get("/api/genres/:id/:page", helper.genre);
app.get("/api/complete/:page", helper.complete);
app.get("/api/schedule", helper.schedule);
app.get("/api/thumb/:id", helper.thumb);

app.use("*", (req, res) => {
  var data = {
        "api": {
            "Home": {
                "url": "/api/home",
                "desc": "Homepage",
            },
            "Complete": {
                "url": "/api/complete",
                "desc": "Complete/Finished Anime",
            },
            "Complete2": {
                "url": "/api/complete/page/${page}",
                "params": "pageNumber",
                "desc": "Complete Pagination",
            },
            "Ongoing": {
                "url": "/api/ongoing",
                "desc": "Ongoing Anime",
            },
            "Schedule": {
                "url": "/api/schedule",
                "desc": "Schedule Anime",
            },
            "Genres": {
                "url": "/api/genres",
                "desc": "Genre List",
            },
            "Genres Id": {
                "url": "/api/${id}/page/${page}",
                "params": "id,pageNumber",
                "desc": "Show Anime by Genre",
            },
            "Search": {
                "url": "/api/search/${query}",
                "params": "query",
                "desc": "Search Anime",
            },
            "Detail Anime": {
                "url": "/api/anime/${id}",
                "params": "id",
                "desc": "Detail Anime",
            },
            "Detail Anime batch": {
                "url": "/api/batch/${id}",
                "params": "id",
                "desc": "Detail Anime Batch",
            },
            "Detail Episode": {
                "url": "/api/eps/${id}",
                "params": "id",
                "desc": "Detail Anime's Episode",
            },
        }
    };
  res.status(404).json({
    success: false,
    message: data,
  })
});

app.listen(port, () => console.log("Listening to port", port));

module.exports = app;
