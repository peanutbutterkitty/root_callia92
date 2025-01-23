console.log("JS 2 in action")


const myShape = document.getElementById ("heart");


myShape.addEventListener("click", () => {
   myShape.style.borderColor = "purple transparent"
    myShape.classList.toggle("change-me");
})