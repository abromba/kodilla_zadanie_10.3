$(function(){
    var carouselList = $('#carousel ul');

    function changeSlideLeft(){
        carouselList.animate({marginLeft: -400}, 500, moveFirstSlideOnLastPlace);
    };
    function moveFirstSlideOnLastPlace(){
        carouselList.find('li:last').after(carouselList.find('li:first'));
        carouselList.css({marginLeft: 0});
    };
    function changeSlideRight(){
        carouselList.animate({marginLeft: 0}, 500, moveLastSlideOnFirstPlace);
    };
    function moveLastSlideOnFirstPlace(){
        carouselList.find('li:first').before(carouselList.find('li:last'));
        carouselList.css({marginLeft: -400});
    };
    var interval = setInterval(changeSlideLeft, 2000);

    $('.left-side').click(function() {
        clearInterval(interval);
	    changeSlideLeft();
	    interval = setInterval(changeSlideLeft, 2000);
    });
    $('.right-side').click(function() {
		clearInterval(interval);
		changeSlideRight();
        interval = setInterval(changeSlideRight, 2000);
	});
});

