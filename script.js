let btn = document.getElementById("btn")
let jokeContainer = document.getElementById("joke");
let loader = document.getElementById("sub");
btn.addEventListener("click",fetch)

function fetch(){
    jokeContainer.innerText="";
    loader.style.display="block";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://api.api-ninjas.com/v1/jokes?limit=1");
    xmlHttp.setRequestHeader("X-Api-Key", "cF78nQzaoZ02VPGwrhyuOA==zLnUEi044S5VsTQL");
    xmlHttp.send();
    xmlHttp.onload = function() {
        if (xmlHttp.status >= 200 && xmlHttp.status < 300) {
            const result = JSON.parse(xmlHttp.responseText);
            joke = result[0].joke;    
            jokeContainer.innerText=joke
            loader.style.display="none";
        } else {
            loader.style.display="none";
            jokeContainer.innerText="Sorry!! Try again!!"
            alert('Request failed with status: ' + xmlHttp.status);
        }
    
    }
}