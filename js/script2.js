
function startNextMotionGraphic(){
    window.parent.postMessage("complete", '*');
}
window.onload = function() {
    let tl = gsap.timeline({onComplete: startNextMotionGraphic()});
    let tl2 = gsap.timeline({ repeat: -1 });




// start opacity 


tl.from(".clear", { 
    opacity: 0, 
    x: 600,
    delay: 1,
});

tl.to(".clear", { 
    duration: 1,  
    ease: "power1.inOut", 
 
});
tl.from(".chair", { 
    opacity: 0, 
    x: -600,
    delay: 1,
});

tl.to(".chair", { 
    duration: 1,  
    ease: "power1.inOut", 
 
});

tl.from(".doc", { 
    opacity: 0, 
    x: 600,
});

tl.to(".chair", { 

    ease: "power1.inOut", 
 
});

tl.from(".bubble", { 
    opacity: 0, 

});

tl.to(".bubble", { 

    ease: "power1.inOut", 
    opacity:1,
});

tl.from(".bubble2", { 
    opacity: 0, 

});

tl.to(".bubble2", { 

    ease: "power1.inOut", 
    opacity:1,
});



}
