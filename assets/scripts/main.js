document.addEventListener("DOMContentLoaded", function () {
    'use strict';
    
    Splitting();
    
    // Определяем мобильное устройство
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Настраиваем Luxy только для десктопов
    if (!isMobile) {
        luxy.init();
    }
    
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    
    // Оптимизированные анимации для всех устройств
    tl.from(".title .char", 1, { 
        opacity: 0, 
        yPercent: isMobile ? 50 : 130, 
        stagger: 0.06, 
        ease: "back.out"
    });
    
    tl.to(".header__img", 2, { 
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
        scale: 1, 
        ease: "expo.out"
    }, "-=1");
    
    tl.from(".header__marq", 2, { 
        opacity: 0, 
        yPercent: 100, 
        ease: "expo.out"
    }, "-=1.5");

    /* Squares effect */
    const gsapSq = gsap.utils.toArray('.section-title__square');
    gsapSq.forEach((gSq, i) => {
        const rotat = gsap.from(gSq, 3, {rotation: 720});
        ScrollTrigger.create({
            trigger: gSq,
            animation: rotat,
            start: 'top bottom',
            scrub: 1.9
        });
    });

    // Оптимизированные параллакс эффекты
    function header() {
        if (!isMobile) {
            gsap.to('.title_paralax', {
                scrollTrigger: {
                    trigger: '.header',
                    start: 'top top',
                    scrub: 1.9
                }, 
                yPercent: -150
            });

            gsap.to('.header .stroke', {
                scrollTrigger: {
                    trigger: '.header',
                    start: 'top top',
                    scrub: 1.9
                },
                xPercent: 50
            });
        }

        gsap.to(".header__img", {
            scrollTrigger: {
                trigger: ".header",
                start: "top top",
                scrub: isMobile ? 1 : 1.9
            },
            xPercent: isMobile ? -30 : -70
        });
        
        gsap.to(".header__img img", {
            scrollTrigger: {
                trigger: ".header",
                start: "top top",
                scrub: isMobile ? 1 : 1.9
            },
            scale: isMobile ? 1.15 : 1.3
        });

        gsap.to('.header__marq-wrapp', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: isMobile ? 1 : 1.9
            },
            xPercent: isMobile ? -25 : -50
        });

        gsap.to('.header__marq-star img', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            rotate: -720
        })
    }
    header();

    function about() {
        gsap.from('.about__img', {
            scrollTrigger: {
                trigger: '.about',
                start: 'top bottom',
                scrub: isMobile ? 1 : 1.9
            },
            yPercent: isMobile ? 40 : 80
        });
        
        gsap.from('.about__img img', {
            scrollTrigger: {
                trigger: '.about',
                start: 'top bottom',
                scrub: isMobile ? 1 : 1.9
            },
            scale: isMobile ? 1.3 : 1.6
        });
        
        gsap.to('.about__txt', {
            scrollTrigger: {
                trigger: '.about__wrapp',
                start: 'top bottom',
                scrub: isMobile ? 1 : 1.9
            },
            yPercent: isMobile ? 25 : 50
        });
    }
    about();

    function benefits() {
        gsap.from('.benefits__num', {
            x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))) * (isMobile ? 0.5 : 1),
            scrollTrigger: {
                trigger: '.beneftis__list',
                start: 'top bottom',
                scrub: isMobile ? 1 : 1.9
            }
        });
    }
    benefits();
  
    function portfolio() {
        gsap.from('.work__item, .work__item-num', {
            y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))) * (isMobile ? 0.5 : 1),
            scrollTrigger: {
                trigger: '.work',
                start: 'top bottom',
                scrub: isMobile ? 1 : 1.9
            }
        });

        gsap.from('.work__item-img img', {
            scale: isMobile ? 1.3 : 1.6,
            scrollTrigger: {
                trigger: '.work__wrapp',
                start: 'top bottom',
                scrub: isMobile ? 1 : 1.9
            }
        });
    }
    portfolio();

    function serv() {
        gsap.from('.serv__item-arrow', {
            x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))) * (isMobile ? 0.5 : 1),
            scrollTrigger: {
                trigger: '.serv__list',
                start: 'top bottom',
                scrub: isMobile ? 1 : 1.9
            }
        });
    }
    serv();

    function footer() {
        gsap.from('.footer__div span', {
            y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))) * (isMobile ? 0.5 : 1),
            opacity: 0, 
            scrollTrigger: {
                trigger: '.footer',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: isMobile ? 1 : 1.9
            }
        });
    }
    footer();
});