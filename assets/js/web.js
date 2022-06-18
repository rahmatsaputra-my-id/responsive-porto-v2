
$(document).ready(function () {
    
    var id = setInterval(_handlerProgresBar, 25);
    
    function _handlerProgresBar() {
        if (width >= 100) {
            body.style.overflow = 'visible';
            progressContainer.style.display = 'none';
            clearInterval(id);
        } else {
            width++;
            body.style.overflow = 'hidden';
            progressBar.style.width = width + '%';
        }
    }

    window.onscroll = () => { _handlerHeaderFixed() }

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
    _handlerShowSlides(slideIndex);

    $(".prev").click(function () {
        _handlerShowSlides(slideIndex += -1);
    })

    $(".next").click(function () {
        _handlerShowSlides(slideIndex += 1);
    })

    $(".dot").click(function (n) {
        _handlerShowSlides(slideIndex = (parseInt(n.currentTarget.id)));
    })
    
    $(".prev-dot").click(function (n) {
        _handlerShowSlides(slideIndex += -1);
    })
    
    $(".next-dot").click(function (n) {
        _handlerShowSlides(slideIndex += 1);
    })

    function _handlerShowSlides(n) {
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
