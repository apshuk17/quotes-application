
var quotes = [
"Coming together is a beginning; keeping together is progress; working together is success.",
"Success is not final, failure is not fatal: it is the courage to continue that counts.",
"The starting point of all achievement is desire.",
"Success is simple. Do what's right, the right way, at the right time.",
"Winning isn't everything, it's the only thing.",
"He has achieved success who has worked well, laughed often, and loved much.",
"Don't aim for success if you want it; just do what you love and believe in, and it will come naturally.",
"Try not to become a man of success, but rather try to become a man of value.",
"Success is how high you bounce when you hit bottom."];


jQuery(document).ready(function($){
	//Carousel Initialisation
     $("#myCarousel").carousel();
	//Appending elements into carousel
	 var $carouselInner = $("#myCarousel .carousel-inner");
	 $.each(quotes, function(index, value){
		 if(index ===0){
			$carouselInner.append('<div class="item active"><p>'+value+'</p></div>'); 
		 }
		else{
			$carouselInner.append('<div class="item"><p>'+value+'</p></div>'); 
		}
	 });
	 // Appending elements into Carousel Indicators
	 var $carouselIndicators = $("#myCarousel .carousel-indicators");
	 $.each(quotes, function(index, value){
		 if(index ===0){
			$carouselIndicators.append('<li data-target="#myCarousel" data-slide-to="'+value+'" class="active"></li>'); 
		 }
		else{
			$carouselIndicators.append('<li data-target="#myCarousel" data-slide-to="'+value+'" class="active"></li>'); 
		}
	 });
});

