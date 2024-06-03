
    //모바일메뉴 토글효과
        const headerToggle = document.getElementById("headerToggle");
        const headerNav = document.querySelector(".header__nav");

        headerToggle.addEventListener("click", () => {
            headerNav.classList.toggle("show");
        });


    function link() {
        document.querySelectorAll("a[href^='#']").forEach((anchor) => {
            anchor.addEventListener("click", function(e){
                e.preventDefault();
    
                const targetId = this.getAttribute("href");
                const targetElement = document.querySelector(targetId);
    
                if(targetElement){
                    targetElement.scrollIntoView({ behavior: "smooth"});
                }
            });
        });
    }
    function port() {
        gsap.registerPlugin(ScrollTrigger);
        const horSection = gsap.utils.toArray(".port__item");
    
        gsap.to(horSection, {
            xPercent: -120 * (horSection.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: "#port",
                start: "top 56px",
                end: "+=3000",
                pin: true,
                scrub: 1,
                markers: false,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        });
    }
    function smooth() {
        const lenis = new Lenis({
            duration: 1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
    
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf);
        }
    
        requestAnimationFrame(raf);
    
        lenis.on("scroll", (e) => {
            console.log(e);
        })
    }

