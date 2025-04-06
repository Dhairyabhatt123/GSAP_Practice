const cursor = document.querySelector("#cursor");
const main = document.querySelector("#main");
var imgdiv = document.querySelector("img");

cursor.addEventListener("mousemove", function (dets) {
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.3,
        ease:"back.out"
    })
});

imgdiv.querySelector("mouseenter",function(){
    cursor.innerHTML = "view more"
    gsap.to(cursor,{
        scale : 4,
        backgroundcolor : "grey",

    })
})

imgdiv.querySelector("mouseleave",function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale : 1,

    })
})