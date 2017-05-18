$(function(){
    var carouselList = $('#carousel ul');

    function changeSlide(){
        carouselList.animate({marginLeft: -400}, 500, moveFirstSlideOnLastPlace);
    };
    function moveFirstSlideOnLastPlace(){
        carouselList.find('li:last').after(carouselList.find('li:first'));
        carouselList.css({marginLeft: 0});
    };
    function changeSlideLeft(){
        carouselList.animate({marginLeft: 0}, 500);
    };
    function moveLastSlideOnFirstPlace(){
        carouselList.find('li:first').before(carouselList.find('li:last'));
        carouselList.css({marginLeft: -400});
        changeSlideLeft();
    };
    var interval = setInterval(changeSlide, 3000);

    $('.left-side').click(function() {
        changeSlide();
    });
    $('.right-side').click(function() {
        moveLastSlideOnFirstPlace();
//		clearInterval(interval);
	});
});

