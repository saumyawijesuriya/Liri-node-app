var dotenv = require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var axios= require("axios");

var command = process.argv[2];
var searchValue = process.argv[3];

function spotifTy_This_Song (searchValue){


    var Spotify = requier('node-spotify-api');
    
    
    var spotify = new Spotify(keys.spotify);
    
    
    spotify.search({ type: 'track', query: searchValue }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
        console.log("The song's name: " + data.tracks.items[0].name)
        console.log("A preview link of the song from Spotify: " + data.tracks.items[0].href)
        console.log("The album that the song is from: " + data.tracks.items[0].album.name)
        console.log(".........................................................................")
    
    });
    };

    function movie_This(searchValue) {

        var queryUrl = "http://www.omdbapi.com/?t=" + searchValue + "&y=&plot=short&apikey=trilogy";
        console.log(queryUrl);
        console.log("...................................................................................")
    
        axios.get(queryUrl).then(
            function (response) {
                console.log("Title of the Movie : " + response.data.Title);
                console.log("Year the movie came out : " + response.data.Year);
                console.log("Rotten Tomatoes Rating of the Movie : " + response.data.Ratings[0].Value);
                console.log("Country where the  movie was produced : " + response.data.Country);
                console.log("Language of the Movie : " + response.data.Language);
                console.log("Plot of the Movie  : " + response.data.Plot);
                console.log("Actors in the Movie : " + response.data.Actors);
                console.log("............................................................................")
            }
        );
    };
    function do_what_it_says(){
        fs.readFile("random.txt", "utf8", function(error, data){
            if (error){
                return console.log(error);
            }
        
            // console.log(data);
        
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
        
            case "do-what-it-says":
            do_what_it_says();
            break;
        
        }
