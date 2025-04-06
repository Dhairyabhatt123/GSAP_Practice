// gsap.to("#box",{
//     x:1000,
//     y:500,
//     duration:2,
//     delay: 1,
//     rotate :360,
//     backgroundColor: "green",
//     borderRadius:"50%",
//     scale:0.5
// }
// )

// gsap.from("#box2",{
//     x:1000,
//     y:500,
//     duration:2,
//     delay: 1,
//     rotate :360,
//     backgroundColor: "green",
//     borderRadius:"50%",
//     scale:0.5
// }
// ) 


// gsap.from("h1",{
//     opacity:0,
//     color:"red",
//     duration:1,
//     delay:0.5,
//     y:30,
//     stagger:0.3,
//     repeat:-1,
//     yoyo:true
// }
// )

// var tl = gsap.timeline();

// tl.to("#box1",{
//     x:1200,
//     rotate:360,
//     duration:1.5,
//     // delay:1
// })
// tl.to("#box2",{
//     x:900,
//     rotate:360,
//     duration:1.5,
//     // delay:1
// })
// tl.to("#box3",{
//     x:600,
//     rotate:360,
//     duration:1.5,
//     // delay:1
// })



var tl = gsap.timeline()

tl.from("h2",{
    y:-20,
    duration:1,
    opacity:0,
    delay:0.5,
})

tl.from("h3",{
    y:-20,
    duration:1,
    opacity:0,
    stagger:0.3
})

tl.from("#mid",{
    y:-20,
    duration:0.4,
    opacity:0,
    scale:0.2
})
