for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click" , function(){ 
 var buttonInner = this.innerHTML ;
 switch(buttonInner){
    case "w" :
        var tom1 = new Audio("./sounds/tom-1.mp3")
        tom1.play();
        break;
        case "a" :
        var tom2 = new Audio("./sounds/tom-2.mp3")
        tom2.play();
        break;
        case "s" :
        var tom3 = new Audio("./sounds/tom-3.mp3")
        tom3.play();
        break;
        case "d" :
        var tom4 = new Audio("./sounds/tom-4.mp3")
        tom4.play();
        break;
        case "j" :
        var crash = new Audio("./sounds/crash.mp3")
        crash.play();
        break;
        case "k" :
        var snare = new Audio("./sounds/snare.mp3")
        snare.play();
        break;
        case "l" :
        var kick = new Audio("./sounds/kick-bass.mp3")
        kick.play();
        break;

        default:console.log(buttonInner);

 }
/**if(i=1){
    var audio =new Audio("./sounds/tom-2.mp3");
    audio.play();
    break;
}
if(i=3){
    var audio =new Audio("./sounds/tom-3.mp3");
    audio.play();
    break;
}
if(i=4){
    var audio =new Audio("./sounds/tom-4.mp3");
    audio.play();
    break;
}
else{
    var audio =new Audio("./sounds/kick-bass.mp3");
    audio.play();break;
}**/
   
    
    
    ;});}
//var audio =new Audio("./sounds/tom-1.mp3");