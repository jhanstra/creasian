$(document).ready(function() {
	$('#upper-left-logo').hover(function() {
		$(".rotating-photos").attr("src","photos/crab-rangoons.jpg")
	})


	(function(){

    // List your words here:
    var photos = [
        "photos/inside-tables.jpg",
        "photos/crab-rangoons.jpg",
        "photos/pot-stickers.jpg",
        "photos/spring-rolls.jpg",
        ], i = 0;

    setInterval(function(){
        $('.rotating-photos').(function(){
            $(this).attr("src",photos[i=(i+1)%photos.length]);
        });
       // 3 seconds
    }, 1000);
});