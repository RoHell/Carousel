var span = $('span');

span.each(function(index, element) {
	if(index % 2 == 0 ) {
		$(element).css('color', 'red');
	};
});

var paragraphs = $('p');

paragraphs.each(function(index, element) {
	var button = '<button class="btn" data-tmp="'+ index + '"> Baton '	+index+' </button>';
	$(element).append(button);
});

$('button').click(function() {
	alert($(this).attr('data-tmp'));

});

$(".btn").css({
	"color": "#ccc",
	"background-color": "#000",
	"padding": "5px",
	"border-radius": "4px",
	"position": "absolute",
	"left": "70px",
	"margin-top": "-5px"
});