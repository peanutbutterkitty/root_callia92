console.log ("loaded •⩊•")

const stage = document.querySelector("body");
const pickle = document.getElementById("pickle");

//sounds
const pickleSound = new Audio ("sound/meow-song.mp3")
pickle.onclick = function(){
    this.classList.toggle("move");
    pickleSound.play();
}


stage.addEventListener("click", function(event) {
    console.log(event.clientX + ":" + event.clientY)
    //pickle.style.transform = "translateX("+ event.clientX +"px) translateY("+event.clientY+"px)";
    pickle.style.transform = `translateX(${event.clientX-100}px) translateY(${event.clientY-92}px)`;
})


/*Custom Object*/
    function addMyObject(){
    let myObject = document.createElement("img");
    myObject.src= "img/strawberry shortcake.svg";
    myObject.style.width = "80px"
    stage.append(myObject);

    let w = window.innerWidth - 100;
    let randoX = Math.floor ((Math.random() * w) +1);
    let h = window.innerHeight - 58;
    let randoY = Math.floor((Math.random()* h) +1);

    myObject.style.transform =`translateX(${randoX}px) translateY(${randoY}px)`;  

    setTimeout(()=> {myObject.remove(); addMyObject();},4000);
}
addMyObject();
