$(document).scroll(function () {
    $(".scroll-transition").each(function () {
        var h = this.getAttribute("data-transition-at");
        var a = this.getAttribute("data-transition-add").split(',');
        var r = this.getAttribute("data-transition-remove").split(',');
        if ($(window).scrollTop() > h) {
            // noinspection JSDuplicatedDeclaration
            for (var i = 0; i < a.length; i++) {
                this.classList.add(a[i].trim());
            }
            // noinspection JSDuplicatedDeclaration
            for (var i = 0; i < r.length; i++) {
                this.classList.remove(r[i].trim());
            }
        } else {
            // noinspection JSDuplicatedDeclaration
            for (var i = 0; i < a.length; i++) {
                this.classList.remove(a[i].trim());
            }
            // noinspection JSDuplicatedDeclaration
            for (var i = 0; i < r.length; i++) {
                this.classList.add(r[i].trim());
            }
        }
    });
});


$('a[data-open="menu"]').click(function (e) {
    var b = $('body');
    if(b.hasClass('menu-visible'))
        $('a[data-open="menu"]').html("<i class=\"ion-navicon\"></i>");
    else
        $('a[data-open="menu"]').html("<i class=\"ion-android-close\"></i>");

    b.toggleClass('menu-visible');

    e.preventDefault();
});

$('.main-body').click(function () {
    var b = $('body');
    if(b.hasClass('menu-visible')) {
        $('a[data-open="menu"]').html("<i class=\"ion-navicon\"></i>");
        b.removeClass('menu-visible');
    }
});


var p = $('.parallax');
p.each(function () {
    var im = this.getAttribute("data-parallax-img");
    var s = this.getAttribute("data-parallax-speed");

    $(this).parallax({
        imageSrc: im,
        speed: s
    });
});

var bp = $('.bar-progress');
bp.each(function () {
    console.log("got em");
    var w = this.getAttribute("data-percent");
    this.getElementsByClassName("progress-bar")[0].style.width = w + "%"
});


$('.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
});

$("#image-carousel").owlCarousel({
    autoHeight: true,
    autoPlay: true,
    autoWidth: true,
    items: 1,
    loop: true,
    navigation: true,
    navigationText: ["<i class='ion-ios-arrow-left icon'></i>", "<i class='ion-ios-arrow-right icon'></i>"],
    singleItem: true
});

$("#text-carousel, #text-image-carousel").owlCarousel({
    autoHeight: true,
    autoPlay: true,
    autoWidth: true,
    items: 1,
    loop: true,
    singleItem: true,
    stopOnHover: true
});

$("#multiple-carousel").owlCarousel({
    autoHeight: true,
    autoPlay: true,
    autoWidth: true,
    loop: true,
    stopOnHover: true
});