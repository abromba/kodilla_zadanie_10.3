$(function(){
    var carouselList = $('#carousel ul');
    var timeOut = 500;
    var transitionDuration = 2000;

    function changeSlideLeft(){
        carouselList.animate({marginLeft: -400}, timeOut, moveFirstSlideOnLastPlace);
    };
    function moveFirstSlideOnLastPlace(){
        carouselList.find('li:last').after(carouselList.find('li:first'));
        carouselList.css({marginLeft: 0});
    };
    function changeSlideRight(){
        carouselList.animate({marginLeft: 0}, timeOut, moveLastSlideOnFirstPlace);
    };
    function moveLastSlideOnFirstPlace(){
        carouselList.find('li:first').before(carouselList.find('li:last'));
        carouselList.css({marginLeft: -400});
    };
    var interval = setInterval(changeSlideLeft, transitionDuration);

    $('.left-side').click(function() {
        clearInterval(interval);
        changeSlideLeft();
        interval = setInterval(changeSlideLeft, transitionDuration);
    });
    $('.right-side').click(function() {
        clearInterval(interval);
        changeSlideRight();
        interval = setInterval(changeSlideRight, transitionDuration);
    });
});

