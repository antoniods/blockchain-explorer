

(function () {
    "use strict"
    document.getElementById("search-button").addEventListener("click",()=>{

        var bar = document.getElementById("search-bar")
        console.log("bar")
        console.log(bar.value)
    })
  }());
(function () {
    fetch('https://mainnet.blockchainos.org/')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });

  }());