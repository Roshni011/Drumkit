for(var i=0; i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML=this.innerHTML;

//     switch(buttonInnerHTML){
// case "A":
// var tom=new Audio("crash (2).mp3");
// tom.play();
// break;

// case "B":
//     var tom2=new Audio("kick-bass (2).mp3");
// tom2.play();
// break;
// case "H":
//     var tom3=new Audio("tom-1.mp3");
// tom3.play();
// break;
// case "A":
//     var tom4=new Audio("snare (2).mp3");
// tom4.play();
// break;
// case "Y":
//     var snare=new Audio("tom-4.mp3");
// snare.play();
// break;
// case "P":
//     var crash=new Audio("tom-2.mp3");
// crash.play();
// break;
// case "R":
//     var kick=new Audio("tom-3.mp3");
// kick.play();
// break;
makesound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);

    }
    
)};


document.addEventListener("keypress", function(event){
makesound(event.key);
buttonAnimation(event.key);
});
function makesound(key){
    switch(key){
        case "W":
        var tom=new Audio("crash (2).mp3");
        tom.play();
        break;
        
        case "A":
            var tom2=new Audio("kick-bass (2).mp3");
        tom2.play();
        break;
        case "S":
            var tom3=new Audio("tom-1.mp3");
        tom3.play();
        break;
        case "D":
            var tom4=new Audio("snare (2).mp3");
        tom4.play();
        break;
        case "J":
            var snare=new Audio("tom-4.mp3");
        snare.play();
        break;
        case "K":
            var crash=new Audio("tom-2.mp3");
        crash.play();
        break;
        case "L":
            var kick=new Audio("tom-3.mp3");
        kick.play();
        break;

}}
function buttonAnimation(currentKey){
   var activeButton= document.querySelector("."+currentKey);
   activeButton.classList.add(pressed);
   setTimeout(function(){
    activeButton.classList.remove("Pressed");
   }, 100);
}