var $carouselList = $(".gallery");
var $circleList = $(".circle");
var $galleryLength = $(".gallery img").length;

var currentIndex = 0;
var previousIndex = currentIndex - 1;

function insertElement() {
	for (var i = 0; i < $galleryLength; i++) {		//for each <img> in .gallery
		var element = document.createElement("li");	//create <li> 'element' and
		$(element).attr("id", i);					//give it 'id' that equals to 'i' than
		$(".circle").append(element);				//append it to .circle 
	}
}

$(function () {
	setInterval(changeSlideRight, 3000);			//run function changeSlideRight with interval of 3s.
	insertElement();								//run function insertElement
	applyClass();									//run function applyClass
});

function firstSlideRight() {
	var $firstItem = $carouselList.find("li:first");//find first <li> in .gallery
	var $lastItem = $carouselList.find("li:last");	//find last <li> in .gallery
	$lastItem.after($firstItem);					//after last <li> place first <li>
	$carouselList.css({marginLeft: "0"});			//move <li> 0px to left
};

function changeSlideRight() {
	previousIndex = currentIndex;					//prevoius index = current index
	currentIndex++;									//add 1 to current index
	if (currentIndex >= $galleryLength) {			//if current index >= number of <img>s
		currentIndex = 0;							//than current index = 0
	};
	$carouselList.animate({marginLeft: "-600px"}, 500, firstSlideRight);//animate <li> by
																		//moving -600px to left
																		//with speed of 500ms and
																		//run function firstSlideRight
	applyClass();									//run function applyClass
};

function firstSlideLeft() {
	var $firstItem = $carouselList.find("li:first");//find first <li> in .gallery
	var $lastItem = $carouselList.find("li:last");	//find last <li> in .gallery
	$firstItem.before($lastItem);					//before first <li> place last <li>
	$carouselList.css({marginLeft: "-600px"});		//move <li> -600px to left
};

function changeSlideLeft() {
	previousIndex = currentIndex;					//prevoius index = current index
	currentIndex--;									//subtract 1 from current index
	if (currentIndex < 0) {							//if current index < 0
		currentIndex = $galleryLength - 1;			//than current index = nr of <img>s-1
	};
	console.log("currentIndex", currentIndex);
	firstSlideLeft();								//run function firstSlideLeft
	$carouselList.animate({marginLeft: "0"}, 500);	//animate <li> by moving to 0px
													//with speed of 500ms
	applyClass();									//run function applyClass
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