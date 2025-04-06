var initialpath = "M 10 100 Q 250 100 990 100";
        var finalpath = "M 10 100 Q 250 0 990 100";

        var top = document.querySelector("#top");

        top.addEventListener("mousemove", function (dets) {
            // Get the mouse position relative to the element
            let rect = top.getBoundingClientRect();
            let x = dets.clientX - rect.left;
            let y = dets.clientY - rect.top;

            // Update the path dynamically
            let path = `M 10 100 Q ${x} ${y} 990 100`;

            gsap.to("svg path", {
                attr: { d: path },
                duration: 0.2,
                ease: "power3.out",
            });
        });

        top.addEventListener("mouseleave", function () {
            gsap.to("svg path", {
                attr: { d: finalpath },
                duration: 1.5,
                ease: "elastic.out(1, 0.2)",
            });
        });