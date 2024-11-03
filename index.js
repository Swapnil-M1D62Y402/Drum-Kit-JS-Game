
function sound(key) {

    switch (key) {
        case 'w':
            const audiow = new Audio("./sounds/crash.mp3");
            audiow.play();
            break;
        case 'a':
            const audioa = new Audio("./sounds/snare.mp3");
            audioa.play();
            break;
        case 's':
            const audios = new Audio("./sounds/tom-1.mp3");
            audios.play();
            break;
        case 'd':
            const audiod = new Audio("./sounds/tom-2.mp3");
            audiod.play();
            break;
        case 'j':
            const audioj = new Audio("./sounds/tom-3.mp3");
            audioj.play();
            break;
        case 'k':
            const audiok = new Audio("./sounds/tom-4.mp3");
            audiok.play();
            break;
        case 'l':
            const audiol = new Audio("./sounds/kick-bass.mp3");
            audiol.play();
            break;
        default:
            console.log(this);
    }
}

//Sound Made for Key Cliked

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;
        sound(buttonInnerHtml);
        keyAnimation(buttonInnerHtml);

    })
}

//Sound Made for Key Pressed

document.addEventListener("keydown", function (event) {
    sound(event.key);
    keyAnimation(event.key);
})


function keyAnimation(current_key) {

    var activeButton = document.querySelector("." + current_key);

    activeButton.classList.add("pressed"); //Problem with this line is that the buttons dont go back to normal after pressed,
    //So we need a timer to control the pressed class 

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
}   
