console.log("YAAAY (∩˃ω˂∩)")


const myCircles = document.querySelectorAll(".circle")

myCircles.forEach(function(item, index){
    item.addEventListener("click", function(){
      //  console.log("circle clicked:" + (parseInt (index) + 1) );//


    // item.classList.toggle("move-me");
    if (item.classList.contains ("square")){
        //do something
        item.classList.toggle("make-round")
    }else {
        //do something else
        item.classList.toggle("move-me")
    }
    })
})