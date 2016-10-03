// counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
   //Make a request
   var request = new XMLHttpRequest();
   
   //capture the response and store it in a variable
   
   //render the response in correct span
       counter = counter + 1;
       var span = document.getElementById('count');
       span.innerHTML = counter.toSring();
};



