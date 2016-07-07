var $carouselList = $(".gallery");
var $circleList = $(".circle");
var currentIndex = 0;
var previousIndex = currentIndex - 1;
var $galleryLength = $(".gallery img").length;

function insertElement() {
	console.log("insertElement", $galleryLength);
	for (var i = 0; i < $galleryLength; i++) {
		var element = document.createElement("li");
		$(element).attr("id", i);
		$(".circle").append(element);
	}
}

$(function () {
	setInterval(changeSlideRight, 3000);
	insertElement();
	applyClass();
});

function firstSlideRight() {
	var $firstItem = $carouselList.find("li:first");
	var $lastItem = $carouselList.find("li:last");
	$lastItem.after($firstItem);
	$carouselList.css({marginLeft: "0"});	
};

function changeSlideRight() {
	previousIndex = currentIndex;
	currentIndex++;
	$carouselList.animate({marginLeft: "-600px"}, 500, firstSlideRight);
	applyClass();
};

function firstSlideLeft() {
	var $firstItem = $carouselList.find("li:first");
	var $lastItem = $carouselList.find("li:last");
	$firstItem.before($lastItem);
	$carouselList.css({marginLeft: "-600px"});
};

function changeSlideLeft() {
	previousIndex = currentIndex;
	currentIndex--;
	firstSlideLeft();
	$carouselList.animate({marginLeft: "0"}, 500);
	applyClass();
};

function applyClass() {
	var $currentCircle = $("#" + currentIndex);
	var $previousCircle = $("#" + previousIndex);
	$currentCircle.addClass("disc");
	$previousCircle.removeClass("disc");
}

$("#right").click(function() {
	changeSlideRight();
});

$("#left").click(function() {
	changeSlideLeft();
});



// $(".circle li").click(function() {
// 	$(this).addClass("disc");
// 	// $('.circle li').css({listStyleType: "circle"})
// });




