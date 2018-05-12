

var $head = $("#header");
console.log($head);

var $li = $("li");
console.log($li);
$li.addClass("item");

var $p = $("p");
$p.hide();

$p.fadeIn(5000);


// $("li").on("click", function(){
// 	console.log(this);

// 	$(this).hide().fadeIn(5000)
// });

$("li").attr("defer");
$("li").removeAttr("defer");
$("li").css({
	"background-color": "red", "color": "blue"});

// $("li").on("click", function(){
// 	$(this).animate({
// 		fontSize:"96pt"
// 	}, 2000, function(){
// 		$(this).animate({
// 			fontSize: "26pt"
// 		}, 2000)
// 	});
// });

//start mr minsky's copypaste


$("li").on("mouseenter", function(){
	grow(this);
});

function grow(element) {
	$(element).animate({
		fontSize:"96pt"
	}, 2000);
	$(element).off("mouseenter");
}

$("li").on("click", function(){
	shrink(this);
});

function shrink(element) {
	$(element).animate({
		fontSize:"26pt"
	}, 2000);
	$("li").on("mouseenter", function(){
		grow(element);
	});
}

//end mr minskey's copypaste