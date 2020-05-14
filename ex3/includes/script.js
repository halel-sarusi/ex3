/*------A function to calculate the number of rectangles-------*/
/*------Adds the first letter of the first name to the first rectangle-------*/

var firstName = "Halel";
var lastName = "Sarusi";

function boxs() {
    var numBoxs = firstName.length*lastName.length;
    var box = "";

    for(i=0; i< numBoxs; i++){
        box += "<article><p></p></article>";
    }

    document.getElementsByTagName("main")[0].innerHTML = box;
    var first = document.getElementsByTagName("p")[0];
    hover(first);
    show();
    back();
}

/*--------Mouse over the first rectangle----------*/

function hover(first){
    document.getElementsByTagName("article")[0].onmouseover = function() {
        first.innerHTML = firstName[0];
        this.style.backgroundColor = "rgb(96, 94, 116)";
    }

    document.getElementsByTagName("article")[0].onmouseout = function(){ 
        this.style.backgroundColor = "white";
        first.innerHTML = "";
    }
}

/*--------The buttons----------*/

function show(){
    var go = document.getElementsByTagName("button")[0];
    go.onclick = function(){
        for(i=0; i<firstName.length; i++){
            var boxOne = document.getElementsByTagName("article")[i];
            boxOne.style.backgroundColor = "rgb(96, 94, 116)";
        }
        boxOne = document.getElementsByTagName("article")[0];
        boxOne.style.color = "rgb(96, 94, 116)";
    }
}

function back() {
    var back = document.getElementsByTagName("button")[1];
    back.onclick = function(){
        for(i=0; i<firstName.length; i++){
            var boxOne = document.getElementsByTagName("article")[i];
            boxOne.style.backgroundColor = 'white';
        }
        boxOne = document.getElementsByTagName("article")[0];
        boxOne.style.color = "white";
    }
}
