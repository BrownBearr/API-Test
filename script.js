    
    // document.getElementById("random").addEventListener("click",getRandomDoggo)
    
    
    
    // function getRandomDoggo(){
    //     fetch('https://dog.ceo/api/breeds/image/random')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         document.getElementById("dogImg").src = data.message;
    //     })
    //   }

    document.getElementById("refresh").addEventListener("click",getApi);   

    
    
function getApi()
{
    var i = Math.floor(Math.random()*20);
    var nyTimesURL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=';
    var myApiKey = 'jky7ru6UA9CrW3P4jjQZ8HnK8xERmPdD';
    var fullURL = nyTimesURL + myApiKey;
    console.log(fullURL);
    fetch(fullURL)
    .then(response => response.json())
    .then(data=>{
        console.log(i);
        //data.results[0].abstract;
        
        document.getElementById("title").innerHTML = data.results[i].title;
        document.getElementById("abstract").innerHTML = data.results[i].abstract;
        //console.log(data.results[0].media[0].media-metadata[0]);


    })
}