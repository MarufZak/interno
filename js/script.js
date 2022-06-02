window.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.header__nav');
    const burger = document.querySelector('.header__burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('lock');
    });

    const commentSlider = new Swiper('.comment .swiper', {
        spaceBetween: 20,
        grabCursor: true,
        pagination: {
            el: '.comment .swiper-pagination',
            type: 'bullets',
            dynamicBullets: true,
            clickable: true
        },
        breakpoints: {
            738: {
                slidesPerView: 3
            },
            500: {
                slidesPerView: 2
            }
        },
        autoplay: {
            delay: 5000,
        },
    })

    const sponsorsSlider = new Swiper('.sponsors .swiper', {
        spaceBetween: 15,
        grabCursor: true,
        pagination: {
            el: '.sponsors .swiper-pagination',
            type: 'bullets',
            dynamicBullets: true,
            clickable: true
        },
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            912: {
                slidesPerView: 5
            },
            712: {
                slidesPerView: 4
            },
            546: {
                slidesPerView: 3
            },
            400: {
                slidesPerView: 2
            }
        }
    })
})