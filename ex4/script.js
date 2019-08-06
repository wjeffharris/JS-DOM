// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var boxes = document.getElementsByClassName("box")
var button = document.getElementById("mybutton")


button.onclick = function() {

    for (let index = 0; index < boxes.length; index++) {
        boxes[index].style.background = "blue";
        
    }
};

