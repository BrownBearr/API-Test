    
    document.getElementById("random").addEventListener("click",getRandomDoggo)
    
    
    
    function getRandomDoggo(){
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response=>response.json())
        .then(data=>{
            document.getElementById("dogImg").src = data.message;
        })
      }

    

    
    
