new Swiper('.realEstateSwiper', {

    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
        nextEl: '.realestate-next',
        prevEl: '.realestate-prev'
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }

});

new Swiper('.mortgageSwiper', {

    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
        nextEl: '.mortgage-next',
        prevEl: '.mortgage-prev'
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }

});