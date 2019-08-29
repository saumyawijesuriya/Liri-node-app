# Liri-node-app
Liri-node-app is a language hInterpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

**Technologies Used**
1. Node.js
2. JavaScript
3. Bands in Toun API
4. OMDB API
5. Spotify API

**How It Works**
1. Authentication keys for Twitter are stored in "keys.js", and we are exporting its contents to the main "liri.js" file
2. MOVIE LOOKUP-  LIRI app uses "Axios" npm Module to get data from OMDB API. User can provide a movie name (Request) as a parameter to get the Response.

![image](https://user-images.githubusercontent.com/51638449/63966218-c1e60e80-ca68-11e9-8516-d12ab26ea6ea.png)the
 If the User did not provide any movie name as a parameter, LIRI will provide the movie "Mr.Nobody's" Infomations along with the link to the movietrailer. 

 3.SPOTIFY SONG LOOKUP- LIRI app uses "Node-spotify-API" npm Module to retrieve Response. User can simply Provide a name of a song as a     parameter and LIRI will provide requiered data.
 ![2019-08-29 (8)](https://user-images.githubusercontent.com/51638449/63968157-ffe53180-ca6c-11e9-9f85-a18460d6b253.png)


 4. LOOKUP FOR BANDS IN TOWN- LIRI app uses "Axios" npm Module to get data from "Bands In Town ApI". User can provide a Band Name/Artist      Name to retrieve data From LIRI.
  ![2019-08-29 (9)](https://user-images.githubusercontent.com/51638449/63968354-839f1e00-ca6d-11e9-92ef-8205ac44230d.png)


  If the User did not provide a parameter(Bnand name/ Artist Name) it will privide the Artist "Pink's" concert Information.
  ![2019-08-29 (10)](https://user-images.githubusercontent.com/51638449/63968703-49824c00-ca6e-11e9-9f99-fd354c858a5b.png)


5. command "DO-WHAT-IT-SAYS" - The program also reads from a file called "random.text" and executes the command and query found there using string and array methods.



