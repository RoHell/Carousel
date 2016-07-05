$(function changeSlide() {
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 3000);
	carouselList.animate({marginLeft:-600}, 500, moveFirstSlide);
});


$(function moveFirstSlide() {
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
});


var carouselList = $(".carousel ul");
// // setTimeout(rotate, 2000);
// setInterval(rotate, 3000);

function rotate() {
	carouselList.animate({"margin-left": -600}, 1000, moveFirstSlide);	
};

function moveFirstSlide() {
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
};

function rotate1() {
	carouselList.animate({"margin-left": 0}, 1000, moveFirstSlide1);	
};

function moveFirstSlide1() {
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.insertBefore(firstItem);
	carouselList.css({marginLeft:-600});
};


$("#right").click(function() {
	rotate();
});

$("#left").click(function() {
	rotate1();
});