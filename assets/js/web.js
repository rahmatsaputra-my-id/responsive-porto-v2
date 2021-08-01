$(document).ready(function () {

    window.onscroll = function () { _handlerHeaderFixed() }

    var headerMobile = document.getElementById("header-mobile-bar-fixed");
    var headerDesktop = document.getElementById("header-bar");
    var sticky = headerMobile.offsetTop;
    var sticky = headerDesktop.offsetTop;

    function _handlerHeaderFixed() {
        if (window.pageYOffset > sticky) {
            headerMobile.classList.add("sticky");
            headerDesktop.classList.add("sticky");
        } else {
            headerMobile.classList.remove("sticky");
            headerDesktop.classList.remove("sticky");
        }
    }

    $(".icon-menu").click(function () {
        $(".header-content").show()
    })

    $(".icon-close").click(function () {
        $(".header-content").hide()
    })

    $(".nav-link-mobile").click(function () {
        $(".header-content").hide()
    })

    var slideIndex = 1;
    showSlides(slideIndex);

    $(".prev").click(function () {
        showSlides(slideIndex += -1);
    })

    $(".next").click(function () {
        showSlides(slideIndex += 1);
    })

    $(".dot").click(function (n) {
        showSlides( slideIndex = (parseInt(n.currentTarget.id)));
    })

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

});
