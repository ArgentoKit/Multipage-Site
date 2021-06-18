$(function () {
    $('.top__slider').not('.slick-initialized').slick({
        arrows: true,
        fade: true,
        speed: 1000,
        autoplay: 3000,
        lazyLoad: 'ondemand',
        appendArrows: $('.top__slider-arrows'),
        prevArrow: '<button type="button" class="slick-prev"><img class="top__slider-arrows--left" src="img/content/arrow-l.svg" alt="left" ></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="top__slider-arrows--right" src="img/content/arrow-r.svg" alt="right" ></button>',
    });

    var $slider = $('.top__slider');

    if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderSlide = document.createElement('button');
    var sliderCount = document.createElement('button');
    sliderSlide.classList.add('top__slider-slide');
    sliderCount.classList.add('top__slider-counter');
    
    var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = 2;
        $(sliderSlide).text('0' + currentSlide);
        $(sliderCount).text('0' + slidesCount);
    };

    $slider.on('init', function(event, slick) {
        $slider.append(sliderSlide);
        $slider.append(sliderCount);
        updateSliderCounter(slick);
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });

    $slider.slick();
    }

    $('.gallery__slider').not('.slick-initialized').slick({
        arrows: true,
        fade: true,
        speed: 1000,
        lazyLoad: 'ondemand',
        appendArrows: $('.gallery__slider-arrows'),
        prevArrow: '<button type="button" class="slick-prev"><img class="gallery__slider-arrows--left" src="img/content/arrow-l.svg" alt="left" ></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="gallery__slider-arrows--right" src="img/content/arrow-r.svg" alt="right" ></button>',
    });

    var $slider = $('.gallery__slider');

    if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderSlide = document.createElement('button');
    var sliderCount = document.createElement('button');
    sliderSlide.classList.add('gallery__slider-slide');
    sliderCount.classList.add('gallery__slider-counter');
    
    var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = 5;
        $(sliderSlide).text('0' + currentSlide);
        $(sliderCount).text('0' + slidesCount);
    };

    $slider.on('init', function(event, slick) {
        $slider.append(sliderSlide);
        $slider.append(sliderCount);
        updateSliderCounter(slick);
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });

    $slider.slick();
    }

    
    $('.allProjects__slider').not('.slick-initialized').slick({
        arrows: true,
        fade: true,
        speed: 1000,
        lazyLoad: 'ondemand',
        appendArrows: $('.allProjects__slider-arrows'),
        prevArrow: '<button type="button" class="slick-prev"><img class="allProjects__slider-arrows--left" src="img/content/arrow-l.svg" alt="left" ></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="allProjects__slider-arrows--right" src="img/content/arrow-r.svg" alt="right" ></button>',
    });

    var $slider = $('.allProjects__slider');

    if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderSlide = document.querySelector('#projects_slide');
    var sliderCount = document.querySelector('#projects_counter');
    sliderSlide.classList.add('allProjects__slider-slide');
    sliderCount.classList.add('allProjects__slider-counter');
    
    var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = 5;
        $(sliderSlide).text('0' + currentSlide);
        $(sliderCount).text('0' + slidesCount);
    };

    $slider.on('init', function(event, slick) {
        $slider.append(sliderSlide);
        $slider.append(sliderCount);
        updateSliderCounter(slick);
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });

    $slider.slick();
    }

    
    $('.certificates__slider').not('.slick-initialized').slick({
        arrows: true,
        speed: 1000,
        lazyLoad: 'ondemand',
        appendArrows: $('.certificates__slider-arrows'),
        prevArrow: '<button type="button" class="slick-prev"><img class="certificates__slider-arrows--left" src="img/content/arrow-l.svg" alt="left" ></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="certificates__slider-arrows--right" src="img/content/arrow-r.svg" alt="right" ></button>',
    });

    var $slider = $('.certificates__slider');

    if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderSlide = document.querySelector('#certificates_slide');
    var sliderCount = document.querySelector('#certificates_counter');
    sliderSlide.classList.add('certificates__slider-slide');
    sliderCount.classList.add('certificates__slider-counter');
    
    var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = 5;
        $(sliderSlide).text('0' + currentSlide);
        $(sliderCount).text('0' + slidesCount);
    };

    $slider.on('init', function(event, slick) {
        $slider.append(sliderSlide);
        $slider.append(sliderCount);
        updateSliderCounter(slick);
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });

    $slider.slick();
    }
})

$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.contacts__popup-bg').fadeIn(500);
})
$('.popup__close').click(function() {
    $('.contacts__popup-bg').fadeOut(500);
})
$('.open-thanks').click(function() {
    $('.contacts__popup').fadeOut(100);
    $('.contacts__done').fadeIn(300);
})
$('.close-thanks').click(function() {
    $('.contacts__popup-bg').fadeOut(500);
    location.reload();
})

$('.header__burger').click(function() {
    $('.menu').toggleClass('menu--open')
})