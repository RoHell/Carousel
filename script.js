	var carouselList = $(".carousel ul");

	$(function () {
		setInterval(changeSlideRight, 3000);
	});

	function changeSlideRight() {
		carouselList.animate({marginLeft: "-600px"}, 500, firstSlideRight);
	};

	function changeSlideLeft() {
		carouselList.animate({marginLeft: "0"}, 500, firstSlideLeft);
	};

	function firstSlideRight() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft: "0"});
	};

	function firstSlideLeft() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft: "-600px"});
	};

	$("#right").click(function() {
		changeSlideRight();
	});

	$("#left").click(function() {
		changeSlideLeft();
	});