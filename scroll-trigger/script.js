// gsap.from("#page1 #inner",{
//     rotate:360,
//     scale:0,
//     duration:2,
//     delay:1,
    
// })

// gsap.from("#inner1",{
//     rotate:360,
//     scale:0,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#inner1",
//         scroller:"body",
//         markers:true,
//         start:"top 50% ",
//         end:"top 30%",
//         scrub:2
//     }
// })

gsap.to("#page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger :{
        // to make this effect we have to pin the parent
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true

    }
}
)