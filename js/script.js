function startNextMotionGraphic() {
    window.parent.postMessage("complete", '*');
}

function runAnimation() {
    var tl = gsap.timeline({ repeat: -1 }); 

    // Add glitch 
    function addGlitchEffect(element) {
        tl.to(element, {
            duration: 0.05,
            x: () => Math.random() * 280,
            y: () => Math.random() * 200,
            repeat: -1,
            yoyo: true,
            ease: "none"
        });
    }

    // Initial state
    gsap.set(".girlsketch", { opacity: 0 });
    gsap.set(".girl2", { opacity: 1 });

    // Define
    tl.fromTo(".girlsketch", {
        opacity: 0,
        delay: 4
    }, {
        opacity: 1,
        duration: 0.2, 
        delay: 2
    });

    tl.fromTo(".girl2", {
        opacity: 1,
        delay: 2,
        duration: 0.4 
    }, {
        opacity: 0,
        duration: 0.4,
        onComplete: addGlitchEffect(".girl2") 
    });
}

window.onload = function() {
    runAnimation();
};
