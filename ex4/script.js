// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"
var box = document.getElementsByClassName("box");
var button = document.getElementById("myButton");
button.addEventListener("click", function() {
    for (var i=0; i<box.length; i++){
        box[i].style.backgroundColor = "blue"};
    
});