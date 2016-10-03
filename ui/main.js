// counter code
var button = document.getElementById("counter");


button.onclick = function () {
    
    //create a request 
    var request = new XMLHttpRequest();
    
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if (request.readystate === XMLHttpRequest.DONE) {
            //Take some action
            if (request.state === 200) {
                var counter = request.responseText;
                 var span = document.getElementById('count');
                  span.innerHTML = counter.toString();
                 }
        }
    
    };
    //Make the request
    request.open('GET', 'http://gokulkreshna.imad.hasura-app.io/counter', true);
    request.send(null);
    };


