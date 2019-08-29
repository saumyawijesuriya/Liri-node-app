require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var axios= require("axios");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var searchValue = process.argv[3];

function spotifTy_This_Song (searchValue){

if(searchValue===undefined || null){
searchValue="The sign";
}
    spotify.search({ type: 'track', query: searchValue }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        
        else{
            for (let i = 0; i < data.tracks.items.length && i<5; i++) {
            
                }
        console.log("Artist(s): " + data.tracks.items[0].artists[0].name)+"\ln";
        console.log("The song's name: " + data.tracks.items[0].name)+"\ln"
        console.log("A preview link of the song from Spotify: " + data.tracks.items[0].href)+"\ln"
        console.log("The album that the song is from: " + data.tracks.items[0].album.name)+"\ln"
        console.log(".....................................................................................")
        }
    
    });
    };

    function movie_This(searchValue) {
        if(!searchValue){
            searchValue="Mr.Nobody"
            console.log("If You Haven't watch Mr. Nobody, click on the link to watch;  <https://www.imdb.com/title/tt0485947/videoplayer/vi23832857?ref_=tt_ov_vi>")
        }

        var queryUrl = "http://www.omdbapi.com/?t=" + searchValue + "&y=&plot=short&apikey=trilogy";
        console.log(queryUrl);
        console.log("......................................................................................")
    
        axios.get(queryUrl).then(
            function (response) {
                console.log("Title of the Movie : " + response.data.Title);+"\ln"
                console.log("Year the movie came out : " + response.data.Year);+"\ln"
                console.log("Rotten Tomatoes Rating of the Movie : " + response.data.Ratings[0].Value);+"\ln"
                console.log("Country where the  movie was produced : " + response.data.Country);+"\ln"
                console.log("Language of the Movie : " + response.data.Language);+"\ln"
                console.log("Plot of the Movie  : " + response.data.Plot);+"\ln"
                console.log("Actors in the Movie : " + response.data.Actors);+"\ln"
                console.log("..............................................................................")
            }
        );
    };
    function concert_This(searchValue) {
        if (!searchValue) {
            searchValue = "pink";
        }

        var queryUrl = "https://rest.bandsintown.com/artists/" + searchValue + "/events?app_id=codingbootcamp";
        console.log(queryUrl);
        console.log(".........................................................................................")
    
    
        axios.get(queryUrl).then(function (response) {
                
                console.log("Name of the Venue : " + response.data[0].venue.name);+"\ln"
                console.log("Venue Location : " + response.data[0].venue.city);+"\ln"
                console.log("Date of Event : " + response.data[0].datetime);+"\ln"
                console.log("......................................................................................")
                
            }
        );
    }
    
    function do_what_it_says(){
        fs.readFile("random.txt", "utf8", function(error, data){
            if (error){
                return console.log(error);
            }

        
            
            var dataArr = data.split(",");
        
            if (dataArr[0]==="spotify-this-song"){
                var check = dataArr[1].slice(1,-1);
                spotifTy_This_Song(check);
            }
           
        })
        }

        switch (command){
            
            case "spotify-this-song":
            spotifTy_This_Song(searchValue);
            break;
        
            case "movie-this":
            movie_This(searchValue);
            break;

            case "concert-this":
            concert_This(searchValue);
            break;
        
            case "do-what-it-says":
            do_what_it_says();
            break;
         }
