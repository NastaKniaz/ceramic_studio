import $ from 'jquery';
import('slick-carousel').then(() => {
    $(document).ready(function () {
        $('.portfolio__carousel').slick({
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            appendDots: $('.slick-slider-dots'),
            prevArrow: '<button type="button" class="slick-prev"><img src="/img/icons/left.svg" alt="arrow"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="/img/icons/right.svg" alt="arrow"></button>',
            responsive: [
                {
                    breakpoint: 1919,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                // {
                //     breakpoint: 993,
                //     settings: {
                //         slidesToShow: 2,
                //         slidesToScroll: 2,
                //     }
                // },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 577,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ],
            // variableWidth: true,
            // slideWidth:450,
        });
    });
});
$(document).ready(function () {
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__items')
            .removeClass('catalog__items_active').eq($(this).index()).addClass('catalog__items_active');
    });

    const promo__burger = document.querySelector('.promo__burger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

    promo__burger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
