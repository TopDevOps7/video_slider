(function () {
	let playvideo_index = 0;

	let slides = document.getElementsByClassName("slider__slide slick-slide");
	let navlinks = document.getElementsByClassName("slider__navlink");
	var slider_for = $('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		cssEase: 'linear',
		asNavFor: '.slick-carousel',
		pauseOnHover: false,
		swipeToSlide: false,
		swipe: false,
		autoplay: true,
		autoplaySpeed: 10000,
	});
	slider_for.on('afterChange', function (event, slick, currentSlide, nextSlide) {

		if (currentSlide == 0) {
			var video = document.querySelector("#video")
			video.currentTime = 0;
			video.play();
			$("#image1").css({ "opacity": 1, "box-shadow": "rgba(197, 180, 247, 0.19) 0px 10px 20px,	rgba(0, 0, 0, 0.23) 0px 6px 6px;" });
			$("#image2").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image3").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image4").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image5").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image6").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image7").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image8").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image9").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image10").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image11").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image12").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image13").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image14").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image15").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$(".number1").css({ "opacity": 1 });
			$(".number2").css({ "opacity": 0.4 });
			$(".number3").css({ "opacity": 0.4 });
			$(".number4").css({ "opacity": 0.4 });
			$(".number5").css({ "opacity": 0.4 });
			$(".number6").css({ "opacity": 0.4 });
			$(".number7").css({ "opacity": 0.4 });
			$(".number8").css({ "opacity": 0.4 });
			$(".number9").css({ "opacity": 0.4 });
			$(".number10").css({ "opacity": 0.4 });
			$(".number11").css({ "opacity": 0.4 });
			$(".number12").css({ "opacity": 0.4 });
			$(".number13").css({ "opacity": 0.4 });
			$(".number14").css({ "opacity": 0.4 });
			$(".number15").css({ "opacity": 0.4 });
		}
		if (currentSlide == 1) {
			var video1 = document.querySelector("#video1")
			video1.currentTime = 0;
			video1.play();
			$("#image2").css({ "opacity": 1, "box-shadow": "rgba(197, 180, 247, 0.19) 0px 10px 20px,	rgba(0, 0, 0, 0.23) 0px 6px 6px;" });
			$("#image1").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image3").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image4").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image5").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image6").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image7").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image8").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image9").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image10").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image11").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image12").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image13").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image14").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image15").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$(".number2").css({ "opacity": 1 });
			$(".number1").css({ "opacity": 0.4 });
			$(".number3").css({ "opacity": 0.4 });
			$(".number4").css({ "opacity": 0.4 });
			$(".number5").css({ "opacity": 0.4 });
			$(".number6").css({ "opacity": 0.4 });
			$(".number7").css({ "opacity": 0.4 });
			$(".number8").css({ "opacity": 0.4 });
			$(".number9").css({ "opacity": 0.4 });
			$(".number10").css({ "opacity": 0.4 });
			$(".number11").css({ "opacity": 0.4 });
			$(".number12").css({ "opacity": 0.4 });
			$(".number13").css({ "opacity": 0.4 });
			$(".number14").css({ "opacity": 0.4 });
			$(".number15").css({ "opacity": 0.4 });
		}
		if (currentSlide == 2) {
			var video2 = document.querySelector("#video2")
			video2.currentTime = 0;
			video2.play();
			$("#image3").css({ "opacity": 1, "box-shadow": "rgba(197, 180, 247, 0.19) 0px 10px 20px,	rgba(0, 0, 0, 0.23) 0px 6px 6px;" });
			$("#image2").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image1").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image4").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image5").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image6").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image7").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image8").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image9").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image10").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image11").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image12").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image13").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image14").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image15").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$(".number3").css({ "opacity": 1 });
			$(".number2").css({ "opacity": 0.4 });
			$(".number1").css({ "opacity": 0.4 });
			$(".number4").css({ "opacity": 0.4 });
			$(".number5").css({ "opacity": 0.4 });
			$(".number6").css({ "opacity": 0.4 });
			$(".number7").css({ "opacity": 0.4 });
			$(".number8").css({ "opacity": 0.4 });
			$(".number9").css({ "opacity": 0.4 });
			$(".number10").css({ "opacity": 0.4 });
			$(".number11").css({ "opacity": 0.4 });
			$(".number12").css({ "opacity": 0.4 });
			$(".number13").css({ "opacity": 0.4 });
			$(".number14").css({ "opacity": 0.4 });
			$(".number15").css({ "opacity": 0.4 });
		}
		if (currentSlide == 3) {
			var video3 = document.querySelector("#video3")
			video3.currentTime = 0;
			video3.play();
			$("#image4").css({ "opacity": 1, "box-shadow": "rgba(197, 180, 247, 0.19) 0px 10px 20px,	rgba(0, 0, 0, 0.23) 0px 6px 6px;" });
			$("#image2").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image3").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image1").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image5").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image6").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image7").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image8").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image9").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image10").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image11").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image12").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image13").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image14").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image15").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$(".number4").css({ "opacity": 1 });
			$(".number2").css({ "opacity": 0.4 });
			$(".number3").css({ "opacity": 0.4 });
			$(".number1").css({ "opacity": 0.4 });
			$(".number5").css({ "opacity": 0.4 });
			$(".number6").css({ "opacity": 0.4 });
			$(".number7").css({ "opacity": 0.4 });
			$(".number8").css({ "opacity": 0.4 });
			$(".number9").css({ "opacity": 0.4 });
			$(".number10").css({ "opacity": 0.4 });
			$(".number11").css({ "opacity": 0.4 });
			$(".number12").css({ "opacity": 0.4 });
			$(".number13").css({ "opacity": 0.4 });
			$(".number14").css({ "opacity": 0.4 });
			$(".number15").css({ "opacity": 0.4 });
		}
		if (currentSlide == 4) {
			var video4 = document.querySelector("#video4")
			video4.currentTime = 0;
			video4.play();
			$("#image5").css({ "opacity": 1, "box-shadow": "rgba(197, 180, 247, 0.19) 0px 10px 20px,	rgba(0, 0, 0, 0.23) 0px 6px 6px;" });
			$("#image2").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image3").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image4").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image1").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image6").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image7").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image8").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image9").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image10").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image11").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image12").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image13").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image14").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image15").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$(".number5").css({ "opacity": 1 });
			$(".number2").css({ "opacity": 0.4 });
			$(".number3").css({ "opacity": 0.4 });
			$(".number4").css({ "opacity": 0.4 });
			$(".number1").css({ "opacity": 0.4 });
			$(".number6").css({ "opacity": 0.4 });
			$(".number7").css({ "opacity": 0.4 });
			$(".number8").css({ "opacity": 0.4 });
			$(".number9").css({ "opacity": 0.4 });
			$(".number10").css({ "opacity": 0.4 });
			$(".number11").css({ "opacity": 0.4 });
			$(".number12").css({ "opacity": 0.4 });
			$(".number13").css({ "opacity": 0.4 });
			$(".number14").css({ "opacity": 0.4 });
			$(".number15").css({ "opacity": 0.4 });
		}
		if (currentSlide == 5) {
			var video5 = document.querySelector("#video5")
			video5.currentTime = 0;
			video5.play();
			$("#image6").css({ "opacity": 1, "box-shadow": "rgba(197, 180, 247, 0.19) 0px 10px 20px,	rgba(0, 0, 0, 0.23) 0px 6px 6px;" });
			$("#image2").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image3").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image4").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image5").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image1").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image7").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image8").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image9").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image10").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image11").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image12").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image13").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image14").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image15").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$(".number6").css({ "opacity": 1 });
			$(".number2").css({ "opacity": 0.4 });
			$(".number3").css({ "opacity": 0.4 });
			$(".number4").css({ "opacity": 0.4 });
			$(".number5").css({ "opacity": 0.4 });
			$(".number1").css({ "opacity": 0.4 });
			$(".number7").css({ "opacity": 0.4 });
			$(".number8").css({ "opacity": 0.4 });
			$(".number9").css({ "opacity": 0.4 });
			$(".number10").css({ "opacity": 0.4 });
			$(".number11").css({ "opacity": 0.4 });
			$(".number12").css({ "opacity": 0.4 });
			$(".number13").css({ "opacity": 0.4 });
			$(".number14").css({ "opacity": 0.4 });
			$(".number15").css({ "opacity": 0.4 });
		}
		if (currentSlide == 6) {
			var video6 = document.querySelector("#video6")
			video6.currentTime = 0;
			video6.play();
			$("#image7").css({ "opacity": 1, "box-shadow": "rgba(197, 180, 247, 0.19) 0px 10px 20px,	rgba(0, 0, 0, 0.23) 0px 6px 6px;" });
			$("#image2").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image3").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image4").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image5").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image6").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image1").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image8").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image9").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image10").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image11").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image12").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image13").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image14").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image15").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$(".number7").css({ "opacity": 1 });
			$(".number2").css({ "opacity": 0.4 });
			$(".number3").css({ "opacity": 0.4 });
			$(".number4").css({ "opacity": 0.4 });
			$(".number5").css({ "opacity": 0.4 });
			$(".number6").css({ "opacity": 0.4 });
			$(".number1").css({ "opacity": 0.4 });
			$(".number8").css({ "opacity": 0.4 });
			$(".number9").css({ "opacity": 0.4 });
			$(".number10").css({ "opacity": 0.4 });
			$(".number11").css({ "opacity": 0.4 });
			$(".number12").css({ "opacity": 0.4 });
			$(".number13").css({ "opacity": 0.4 });
			$(".number14").css({ "opacity": 0.4 });
			$(".number15").css({ "opacity": 0.4 });
		}
		if (currentSlide == 7) {
			var video7 = document.querySelector("#video7")
			video7.currentTime = 0;
			video7.play();
			$("#image8").css({ "opacity": 1, "box-shadow": "rgba(197, 180, 247, 0.19) 0px 10px 20px,	rgba(0, 0, 0, 0.23) 0px 6px 6px;" });
			$("#image2").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image3").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image4").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image5").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image6").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image7").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image1").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image9").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image10").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image11").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image12").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image13").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image14").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image15").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$(".number8").css({ "opacity": 1 });
			$(".number2").css({ "opacity": 0.4 });
			$(".number3").css({ "opacity": 0.4 });
			$(".number4").css({ "opacity": 0.4 });
			$(".number5").css({ "opacity": 0.4 });
			$(".number6").css({ "opacity": 0.4 });
			$(".number7").css({ "opacity": 0.4 });
			$(".number1").css({ "opacity": 0.4 });
			$(".number9").css({ "opacity": 0.4 });
			$(".number10").css({ "opacity": 0.4 });
			$(".number11").css({ "opacity": 0.4 });
			$(".number12").css({ "opacity": 0.4 });
			$(".number13").css({ "opacity": 0.4 });
			$(".number14").css({ "opacity": 0.4 });
			$(".number15").css({ "opacity": 0.4 });
		}
		if (currentSlide == 8) {
			var video8 = document.querySelector("#video8")
			video8.currentTime = 0;
			video8.play();
			$("#image9").css({ "opacity": 1, "box-shadow": "rgba(197, 180, 247, 0.19) 0px 10px 20px,	rgba(0, 0, 0, 0.23) 0px 6px 6px;" });
			$("#image2").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image3").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image4").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image5").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image6").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image7").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image8").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image1").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image10").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image11").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image12").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image13").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image14").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image15").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$(".number9").css({ "opacity": 1 });
			$(".number2").css({ "opacity": 0.4 });
			$(".number3").css({ "opacity": 0.4 });
			$(".number4").css({ "opacity": 0.4 });
			$(".number5").css({ "opacity": 0.4 });
			$(".number6").css({ "opacity": 0.4 });
			$(".number7").css({ "opacity": 0.4 });
			$(".number8").css({ "opacity": 0.4 });
			$(".number1").css({ "opacity": 0.4 });
			$(".number10").css({ "opacity": 0.4 });
			$(".number11").css({ "opacity": 0.4 });
			$(".number12").css({ "opacity": 0.4 });
			$(".number13").css({ "opacity": 0.4 });
			$(".number14").css({ "opacity": 0.4 });
			$(".number15").css({ "opacity": 0.4 });
		}
		if (currentSlide == 9) {
			var video9 = document.querySelector("#video9")
			video9.currentTime = 0;
			video9.play();
			$("#image10").css({ "opacity": 1, "box-shadow": "rgba(197, 180, 247, 0.19) 0px 10px 20px,	rgba(0, 0, 0, 0.23) 0px 6px 6px;" });
			$("#image2").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image3").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image4").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image5").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image6").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image7").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image8").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image9").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image1").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image11").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image12").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image13").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image14").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image15").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$(".number10").css({ "opacity": 1 });
			$(".number2").css({ "opacity": 0.4 });
			$(".number3").css({ "opacity": 0.4 });
			$(".number4").css({ "opacity": 0.4 });
			$(".number5").css({ "opacity": 0.4 });
			$(".number6").css({ "opacity": 0.4 });
			$(".number7").css({ "opacity": 0.4 });
			$(".number8").css({ "opacity": 0.4 });
			$(".number9").css({ "opacity": 0.4 });
			$(".number1").css({ "opacity": 0.4 });
			$(".number11").css({ "opacity": 0.4 });
			$(".number12").css({ "opacity": 0.4 });
			$(".number13").css({ "opacity": 0.4 });
			$(".number14").css({ "opacity": 0.4 });
			$(".number15").css({ "opacity": 0.4 });
		}
		if (currentSlide == 10) {
			var video10 = document.querySelector("#video10")
			video10.currentTime = 0;
			video10.play();
			$("#image11").css({ "opacity": 1, "box-shadow": "rgba(197, 180, 247, 0.19) 0px 10px 20px,	rgba(0, 0, 0, 0.23) 0px 6px 6px;" });
			$("#image2").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image3").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image4").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image5").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image6").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image7").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image8").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image9").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image10").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image1").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image12").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image13").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image14").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image15").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$(".number11").css({ "opacity": 1 });
			$(".number2").css({ "opacity": 0.4 });
			$(".number3").css({ "opacity": 0.4 });
			$(".number4").css({ "opacity": 0.4 });
			$(".number5").css({ "opacity": 0.4 });
			$(".number6").css({ "opacity": 0.4 });
			$(".number7").css({ "opacity": 0.4 });
			$(".number8").css({ "opacity": 0.4 });
			$(".number9").css({ "opacity": 0.4 });
			$(".number10").css({ "opacity": 0.4 });
			$(".number1").css({ "opacity": 0.4 });
			$(".number12").css({ "opacity": 0.4 });
			$(".number13").css({ "opacity": 0.4 });
			$(".number14").css({ "opacity": 0.4 });
			$(".number15").css({ "opacity": 0.4 });
		}
		if (currentSlide == 11) {
			var video11 = document.querySelector("#video11")
			video11.currentTime = 0;
			video11.play();
			$("#image12").css({ "opacity": 1, "box-shadow": "rgba(197, 180, 247, 0.19) 0px 10px 20px,	rgba(0, 0, 0, 0.23) 0px 6px 6px;" });
			$("#image2").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image3").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image4").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image5").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image6").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image7").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image8").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image9").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image10").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image11").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image1").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image13").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image14").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image15").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$(".number12").css({ "opacity": 1 });
			$(".number2").css({ "opacity": 0.4 });
			$(".number3").css({ "opacity": 0.4 });
			$(".number4").css({ "opacity": 0.4 });
			$(".number5").css({ "opacity": 0.4 });
			$(".number6").css({ "opacity": 0.4 });
			$(".number7").css({ "opacity": 0.4 });
			$(".number8").css({ "opacity": 0.4 });
			$(".number9").css({ "opacity": 0.4 });
			$(".number10").css({ "opacity": 0.4 });
			$(".number11").css({ "opacity": 0.4 });
			$(".number1").css({ "opacity": 0.4 });
			$(".number13").css({ "opacity": 0.4 });
			$(".number14").css({ "opacity": 0.4 });
			$(".number15").css({ "opacity": 0.4 });
		}
		if (currentSlide == 12) {
			var video12 = document.querySelector("#video12")
			video12.currentTime = 0;
			video12.play();
			$("#image13").css({ "opacity": 1, "box-shadow": "rgba(197, 180, 247, 0.19) 0px 10px 20px,	rgba(0, 0, 0, 0.23) 0px 6px 6px;" });
			$("#image2").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image3").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image4").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image5").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image6").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image7").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image8").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image9").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image10").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image11").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image12").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image1").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image14").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image15").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$(".number13").css({ "opacity": 1 });
			$(".number2").css({ "opacity": 0.4 });
			$(".number3").css({ "opacity": 0.4 });
			$(".number4").css({ "opacity": 0.4 });
			$(".number5").css({ "opacity": 0.4 });
			$(".number6").css({ "opacity": 0.4 });
			$(".number7").css({ "opacity": 0.4 });
			$(".number8").css({ "opacity": 0.4 });
			$(".number9").css({ "opacity": 0.4 });
			$(".number10").css({ "opacity": 0.4 });
			$(".number11").css({ "opacity": 0.4 });
			$(".number12").css({ "opacity": 0.4 });
			$(".number1").css({ "opacity": 0.4 });
			$(".number14").css({ "opacity": 0.4 });
			$(".number15").css({ "opacity": 0.4 });
		}
		if (currentSlide == 13) {
			var video13 = document.querySelector("#video13")
			video13.currentTime = 0;
			video13.play();
			$("#image14").css({ "opacity": 1, "box-shadow": "rgba(197, 180, 247, 0.19) 0px 10px 20px,	rgba(0, 0, 0, 0.23) 0px 6px 6px;" });
			$("#image2").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image3").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image4").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image5").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image6").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image7").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image8").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image9").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image10").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image11").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image12").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image13").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image1").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image15").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$(".number14").css({ "opacity": 1 });
			$(".number2").css({ "opacity": 0.4 });
			$(".number3").css({ "opacity": 0.4 });
			$(".number4").css({ "opacity": 0.4 });
			$(".number5").css({ "opacity": 0.4 });
			$(".number6").css({ "opacity": 0.4 });
			$(".number7").css({ "opacity": 0.4 });
			$(".number8").css({ "opacity": 0.4 });
			$(".number9").css({ "opacity": 0.4 });
			$(".number10").css({ "opacity": 0.4 });
			$(".number11").css({ "opacity": 0.4 });
			$(".number12").css({ "opacity": 0.4 });
			$(".number13").css({ "opacity": 0.4 });
			$(".number1").css({ "opacity": 0.4 });
			$(".number15").css({ "opacity": 0.4 });
		}
		if (currentSlide == 14) {
			var video14 = document.querySelector("#video14")
			video14.currentTime = 0;
			video14.play();
			$("#image15").css({ "opacity": 1, "box-shadow": "rgba(197, 180, 247, 0.19) 0px 10px 20px,	rgba(0, 0, 0, 0.23) 0px 6px 6px;" });
			$("#image2").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image3").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image4").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image5").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image6").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image7").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image8").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image9").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image10").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image11").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image12").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image13").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image14").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$("#image1").css({ "opacity": 0.4, "box-shadow": "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" });
			$(".number15").css({ "opacity": 1 });
			$(".number2").css({ "opacity": 0.4 });
			$(".number3").css({ "opacity": 0.4 });
			$(".number4").css({ "opacity": 0.4 });
			$(".number5").css({ "opacity": 0.4 });
			$(".number6").css({ "opacity": 0.4 });
			$(".number7").css({ "opacity": 0.4 });
			$(".number8").css({ "opacity": 0.4 });
			$(".number9").css({ "opacity": 0.4 });
			$(".number10").css({ "opacity": 0.4 });
			$(".number11").css({ "opacity": 0.4 });
			$(".number12").css({ "opacity": 0.4 });
			$(".number13").css({ "opacity": 0.4 });
			$(".number14").css({ "opacity": 0.4 });
			$(".number1").css({ "opacity": 0.4 });
		}
	});
	$('.slick-carousel').slick({
		slidesToShow: 15,
		slidesToScroll: 15,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		arrows: false,
		swipe: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: false,
					focusOnSelect: true,
					slidesToShow: 15
				}
			},
		]

	});


	let currentSlide = 0;
	var video = document.querySelector("#video")
	video.currentTime = 0;
	video.play();
	$("#image1").click(function () {
		console.log("ok");
		var video = document.querySelector("#video")
		video.currentTime = 0;
		video.play();
	});
	$("#image2").click(function () {
		console.log("ok");
		var video = document.querySelector("#video1")
		video.currentTime = 0;
		video.play();
	});
	$("#image3").click(function () {
		console.log("ok");
		var video = document.querySelector("#video2")
		video.currentTime = 0;
		video.play();
	});
	$("#image4").click(function () {
		console.log("ok");
		var video = document.querySelector("#video3")
		video.currentTime = 0;
		video.play();
	});
	$("#image5").click(function () {
		console.log("ok");
		var video = document.querySelector("#video4")
		video.currentTime = 0;
		video.play();
	});
	$("#image6").click(function () {
		console.log("ok");
		var video = document.querySelector("#video5")
		video.currentTime = 0;
		video.play();
	});
	$("#image7").click(function () {
		console.log("ok");
		var video = document.querySelector("#video6")
		video.currentTime = 0;
		video.play();
	});
	$("#image8").click(function () {
		console.log("ok");
		var video = document.querySelector("#video7")
		video.currentTime = 0;
		video.play();
	});
	$("#image9").click(function () {
		console.log("ok");
		var video = document.querySelector("#video8")
		video.currentTime = 0;
		video.play();
	});
	$("#image10").click(function () {
		console.log("ok");
		var video = document.querySelector("#video9")
		video.currentTime = 0;
		video.play();
	});
	$("#image11").click(function () {
		console.log("ok");
		var video = document.querySelector("#video10")
		video.currentTime = 0;
		video.play();
	});
	$("#image12").click(function () {
		console.log("ok");
		var video = document.querySelector("#video11")
		video.currentTime = 0;
		video.play();
	});
	$("#image13").click(function () {
		console.log("ok");
		var video = document.querySelector("#video12")
		video.currentTime = 0;
		video.play();
	});
	$("#image14").click(function () {
		console.log("ok");
		var video = document.querySelector("#video13")
		video.currentTime = 0;
		video.play();
	});
	$("#image15").click(function () {
		console.log("ok");
		var video = document.querySelector("#video14")
		video.currentTime = 0;
		video.play();
	});
	$(".slick-next.slick-arrow").click(function () {
		console.log("++");
		var data_index = $(".image_field.slick-slide.slick-current.slick-active").attr("data-slick-index");
		console.log(data_index)
		playvideo(data_index);
	})
	$(".slick-prev.slick-arrow").click(function () {
		var data_index = $(".image_field.slick-slide.slick-current.slick-active.slick-center").attr("data-slick-index");
		console.log(data_index)
		playvideo(data_index);
	})
	function playvideo(current_video) {
		if (current_video == 0) {
			var video = document.querySelector("#video")
			video.currentTime = 0;
			video.play();
		}
		if (current_video == 1) {
			var video1 = document.querySelector("#video1")
			video1.currentTime = 0;
			video1.play();
		}
		if (current_video == 2) {
			var video2 = document.querySelector("#video2")
			video2.currentTime = 0;
			video2.play();
		}
		if (current_video == 3) {
			var video3 = document.querySelector("#video3")
			video3.currentTime = 0;
			video3.play();
		}
		if (current_video == 4) {
			var video4 = document.querySelector("#video4")
			video4.currentTime = 0;
			video4.play();
		}
		if (current_video == 5) {
			var video5 = document.querySelector("#video5")
			video5.currentTime = 0;
			video5.play();
		}
		if (current_video == 6) {
			var video6 = document.querySelector("#video6")
			video6.currentTime = 0;
			video6.play();
		}
		if (current_video == 7) {
			var video7 = document.querySelector("#video7")
			video7.currentTime = 0;
			video7.play();
		}
		if (current_video == 8) {
			var video8 = document.querySelector("#video8")
			video8.currentTime = 0;
			video8.play();
		}
		if (current_video == 9) {
			var video9 = document.querySelector("#video9")
			video9.currentTime = 0;
			video9.play();
		}
		if (current_video == 10) {
			var video10 = document.querySelector("#video10")
			video10.currentTime = 0;
			video10.play();
		}
		if (current_video == 11) {
			var video11 = document.querySelector("#video11")
			video11.currentTime = 0;
			video11.play();
		}
		if (current_video == 12) {
			var video12 = document.querySelector("#video12")
			video12.currentTime = 0;
			video12.play();
		}
		if (current_video == 13) {
			var video13 = document.querySelector("#video13")
			video13.currentTime = 0;
			video13.play();
		}
		if (current_video == 14) {
			var video14 = document.querySelector("#video14")
			video14.currentTime = 0;
			video14.play();
		}
	}

	function changeSlide(moveTo) {
		if (moveTo >= slides.length) { moveTo = 0; }
		if (moveTo < 0) { moveTo = slides.length - 1; }
		console.log(slides[currentSlide].classList);
		console.log(slides[moveTo].classList);
		currentSlide = moveTo;
		console.log(currentSlide);
	}

	document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
		bullet.addEventListener('click', () => {
			if (bulletIndex == 0) {
				var video = document.querySelector("#video")
				video.currentTime = 0;
				video.play();
			}
			if (bulletIndex == 1) {
				var video1 = document.querySelector("#video1")
				video1.currentTime = 0;
				video1.play();
			}
			if (bulletIndex == 2) {
				var video2 = document.querySelector("#video2")
				video2.currentTime = 0;
				video2.play();
			}
			if (bulletIndex == 3) {
				var video3 = document.querySelector("#video3")
				video3.currentTime = 0;
				video3.play();
			}
			if (bulletIndex == 4) {
				var video4 = document.querySelector("#video4")
				video4.currentTime = 0;
				video4.play();
			}
			if (bulletIndex == 5) {
				var video5 = document.querySelector("#video5")
				video5.currentTime = 0;
				video5.play();
			}
			if (bulletIndex == 6) {
				var video6 = document.querySelector("#video6")
				video6.currentTime = 0;
				video6.play();
			}
			if (bulletIndex == 7) {
				var video7 = document.querySelector("#video7")
				video7.currentTime = 0;
				video7.play();
			}
			if (bulletIndex == 8) {
				var video8 = document.querySelector("#video8")
				video8.currentTime = 0;
				video8.play();
			}
			if (bulletIndex == 9) {
				var video9 = document.querySelector("#video9")
				video9.currentTime = 0;
				video9.play();
			}
			if (bulletIndex == 10) {
				var video10 = document.querySelector("#video10")
				video10.currentTime = 0;
				video10.play();
			}
			if (bulletIndex == 11) {
				var video11 = document.querySelector("#video11")
				video11.currentTime = 0;
				video11.play();
			}
			if (bulletIndex == 12) {
				var video12 = document.querySelector("#video12")
				video12.currentTime = 0;
				video12.play();
			}
			if (bulletIndex == 13) {
				var video13 = document.querySelector("#video13")
				video13.currentTime = 0;
				video13.play();
			}
			if (bulletIndex == 14) {
				var video14 = document.querySelector("#video14")
				video14.currentTime = 0;
				video14.play();
			}
			if (currentSlide !== bulletIndex) {
				changeSlide(bulletIndex);
			}
		})
	})



	document.addEventListener("contextmenu", function (e) {
		e.preventDefault();
	}, false);
	$(document).keydown(function (event) {
		if (event.keyCode === 39) {
			changeSlide(currentSlide + 1)
		}
		if (event.keyCode === 37) {
			changeSlide(currentSlide - 1)
		}
		// if (event.keyCode == 123) { // Prevent F12
		// 	return false;
		// } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
		// 	return false;
		// }
	});
	//-----------------------------------------------------------
	var supportsVideo = !!document.createElement('video').canPlayType;

	if (supportsVideo) {
		console.log('pp')
		// Obtain handles to main elements
		var videoContainer = document.getElementById('videocontainer');
		var video = document.getElementById('video');
		var video1 = document.getElementById('video1');
		var video2 = document.getElementById('video2');
		var video3 = document.getElementById('video3');
		var video4 = document.getElementById('video4');
		var video5 = document.getElementById('video5');
		var video6 = document.getElementById('video6');
		var video7 = document.getElementById('video7');
		var video8 = document.getElementById('video8');
		var video9 = document.getElementById('video9');
		var video10 = document.getElementById('video10');
		var video11 = document.getElementById('video11');
		var video12 = document.getElementById('video12');
		var video13 = document.getElementById('video13');
		var video14 = document.getElementById('video14');
		var videoControls = document.getElementById('video-controls');
		video.playbackRate = 1;
		video1.playbackRate = 1;
		video2.playbackRate = 1;
		video3.playbackRate = 1;
		video4.playbackRate = 1;
		video5.playbackRate = 1;
		video6.playbackRate = 1;
		video7.playbackRate = 1;
		video8.playbackRate = 1;
		video9.playbackRate = 1;
		video10.playbackRate = 1;
		video11.playbackRate = 1;
		video12.playbackRate = 1;
		video13.playbackRate = 1;
		video14.playbackRate = 1;

		// Hide the default controls
		video.controls = false;
		video1.controls = false;
		video2.controls = false;
		video3.controls = false;
		video4.controls = false;
		video5.controls = false;
		video6.controls = false;
		video7.controls = false;
		video8.controls = false;
		video9.controls = false;
		video10.controls = false;
		video11.controls = false;
		video12.controls = false;
		video13.controls = false;
		video14.controls = false;

		// Display the user defined video controls
		videoControls.setAttribute('data-state', 'visible');

		// Obtain handles to buttons and other elements
		var playpause = document.getElementById('playpause');
		var playpause1 = document.getElementById('playpause1'); //added code
		var playpause2 = document.getElementById('playpause2'); // added code
		var playpause3 = document.getElementById('playpause3'); // added code
		var playpause4 = document.getElementById('playpause4'); // added code
		var playpause5 = document.getElementById('playpause5'); // added code
		var playpause6 = document.getElementById('playpause6'); // added code
		var playpause7 = document.getElementById('playpause7'); // added code
		var playpause8 = document.getElementById('playpause8'); // added code
		var playpause9 = document.getElementById('playpause9'); // added code
		var playpause10 = document.getElementById('playpause10'); // added code
		var playpause11 = document.getElementById('playpause11'); // added code
		var playpause12 = document.getElementById('playpause12'); // added code
		var playpause13 = document.getElementById('playpause13'); // added code
		var playpause14 = document.getElementById('playpause14'); // added code
		var stop = document.getElementById('stop');
		var mute = document.getElementById('mute');
		var mute1 = document.getElementById('mute1');
		var mute2 = document.getElementById('mute2');
		var mute3 = document.getElementById('mute3');
		var mute4 = document.getElementById('mute4');
		var mute5 = document.getElementById('mute5');
		var mute6 = document.getElementById('mute6');
		var mute7 = document.getElementById('mute7');
		var mute8 = document.getElementById('mute8');
		var mute9 = document.getElementById('mute9');
		var mute10 = document.getElementById('mute10');
		var mute11 = document.getElementById('mute11');
		var mute12 = document.getElementById('mute12');
		var mute13 = document.getElementById('mute13');
		var mute14 = document.getElementById('mute14');
		var volinc = document.getElementById('volinc');
		var voldec = document.getElementById('voldec');
		var progress = document.getElementById('progress');
		var progressBar = document.getElementById('progress-bar');
		var fullscreen = document.getElementById('fs');
		var fullscreen1 = document.getElementById('fs1');
		var fullscreen2 = document.getElementById('fs2');
		var fullscreen3 = document.getElementById('fs3');
		var fullscreen4 = document.getElementById('fs4');
		var fullscreen5 = document.getElementById('fs5');
		var fullscreen6 = document.getElementById('fs6');
		var fullscreen7 = document.getElementById('fs7');
		var fullscreen8 = document.getElementById('fs8');
		var fullscreen9 = document.getElementById('fs9');
		var fullscreen10 = document.getElementById('fs10');
		var fullscreen11 = document.getElementById('fs11');
		var fullscreen12 = document.getElementById('fs12');
		var fullscreen13 = document.getElementById('fs13');
		var fullscreen14 = document.getElementById('fs14');

		// If the browser doesn't support the progress element, set its state for some different styling
		var supportsProgress = (document.createElement('progress').max !== undefined);
		if (!supportsProgress) progress.setAttribute('data-state', 'fake');

		// Check if the browser supports the Fullscreen API
		var fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
		// If the browser doesn't support the Fulscreen API then hide the fullscreen button
		if (!fullScreenEnabled) {
			fullscreen.style.display = 'none';
			fullscreen1.style.display = 'none';
			fullscreen2.style.display = 'none';
			fullscreen3.style.display = 'none';
			fullscreen4.style.display = 'none';
			fullscreen5.style.display = 'none';
			fullscreen6.style.display = 'none';
			fullscreen7.style.display = 'none';
			fullscreen8.style.display = 'none';
			fullscreen9.style.display = 'none';
			fullscreen10.style.display = 'none';
			fullscreen11.style.display = 'none';
			fullscreen12.style.display = 'none';
			fullscreen13.style.display = 'none';
			fullscreen14.style.display = 'none';

		}

		// Check the volume
		var checkVolume = function (dir) {
			if (dir) {
				var currentVolume = Math.floor(video.volume * 10) / 10;
				if (dir === '+') {
					if (currentVolume < 1) video.volume += 0.1;
				}
				else if (dir === '-') {
					if (currentVolume > 0) video.volume -= 0.1;
				}
				// If the volume has been turned off, also set it as muted
				// Note: can only do this with the custom control set as when the 'volumechange' event is raised, there is no way to know if it was via a volume or a mute change
				if (currentVolume <= 0) video.muted = true;
				else video.muted = false;
			}
			changeButtonState('mute');
		}

		// Change the volume
		var alterVolume = function (dir) {
			checkVolume(dir);
		}

		// Set the video container's fullscreen state
		var setFullscreenData = function (state) {
			videoContainer.setAttribute('data-fullscreen', !!state);
			// Set the fullscreen button's 'data-state' which allows the correct button image to be set via CSS
			fullscreen.setAttribute('data-state', !!state ? 'cancel-fullscreen' : 'go-fullscreen');
			fullscreen1.setAttribute('data-state', !!state ? 'cancel-fullscreen' : 'go-fullscreen');
			fullscreen2.setAttribute('data-state', !!state ? 'cancel-fullscreen' : 'go-fullscreen');
			fullscreen3.setAttribute('data-state', !!state ? 'cancel-fullscreen' : 'go-fullscreen');
			fullscreen4.setAttribute('data-state', !!state ? 'cancel-fullscreen' : 'go-fullscreen');
			fullscreen5.setAttribute('data-state', !!state ? 'cancel-fullscreen' : 'go-fullscreen');
			fullscreen6.setAttribute('data-state', !!state ? 'cancel-fullscreen' : 'go-fullscreen');
			fullscreen7.setAttribute('data-state', !!state ? 'cancel-fullscreen' : 'go-fullscreen');
			fullscreen8.setAttribute('data-state', !!state ? 'cancel-fullscreen' : 'go-fullscreen');
			fullscreen9.setAttribute('data-state', !!state ? 'cancel-fullscreen' : 'go-fullscreen');
			fullscreen10.setAttribute('data-state', !!state ? 'cancel-fullscreen' : 'go-fullscreen');
			fullscreen11.setAttribute('data-state', !!state ? 'cancel-fullscreen' : 'go-fullscreen');
			fullscreen12.setAttribute('data-state', !!state ? 'cancel-fullscreen' : 'go-fullscreen');
			fullscreen13.setAttribute('data-state', !!state ? 'cancel-fullscreen' : 'go-fullscreen');
			fullscreen14.setAttribute('data-state', !!state ? 'cancel-fullscreen' : 'go-fullscreen');

		}

		// Checks if the document is currently in fullscreen mode
		var isFullScreen = function () {
			return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
		}

		// Fullscreen
		var handleFullscreen = function () {
			// If fullscreen mode is active...	
			if (isFullScreen()) {
				// ...exit fullscreen mode
				// (Note: this can only be called on document)
				if (document.exitFullscreen) document.exitFullscreen();
				else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
				else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
				else if (document.msExitFullscreen) document.msExitFullscreen();
				setFullscreenData(false);
			}
			else {
				// ...otherwise enter fullscreen mode
				// (Note: can be called on document, but here the specific element is used as it will also ensure that the element's children, e.g. the custom controls, go fullscreen also)
				if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
				else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
				else if (videoContainer.webkitRequestFullScreen) {
					// Safari 5.1 only allows proper fullscreen on the video element. This also works fine on other WebKit browsers as the following CSS (set in styles.css) hides the default controls that appear again, and 
					// ensures that our custom controls are visible:
					// figure[data-fullscreen=true] video::-webkit-media-controls { display:none !important; }
					// figure[data-fullscreen=true] .controls { z-index:2147483647; }
					video.webkitRequestFullScreen();
				}
				else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
				setFullscreenData(true);
			}
		}

		// Only add the events if addEventListener is supported (IE8 and less don't support it, but that will use Flash anyway)
		if (document.addEventListener) {
			// Wait for the video's meta data to be loaded, then set the progress bar's max value to the duration of the video
			video.addEventListener('loadedmetadata', function () {
				progress.setAttribute('max', video.duration);
			});

			// Changes the button state of certain button's so the correct visuals can be displayed with CSS
			var changeButtonState = function (type) {
				// Play/Pause button
				if (type == 'playpause') {
					if (video.paused || video.ended) {
						playpause.setAttribute('data-state', 'play');
					}
					else {
						playpause.setAttribute('data-state', 'pause');
					}
				}
				// Mute button
				else if (type == 'mute') {
					mute.setAttribute('data-state', video.muted ? 'unmute' : 'mute');
				}
			}
			var changeButtonState1 = function (type) {
				// Play/Pause button
				if (type == 'playpause1') {
					if (video1.paused || video1.ended) {
						playpause1.setAttribute('data-state', 'play');
					}
					else {
						playpause1.setAttribute('data-state', 'pause');
					}
				}
				// Mute button
				else if (type == 'mute1') {
					mute1.setAttribute('data-state', video1.muted ? 'unmute' : 'mute');
				}
			}
			var changeButtonState2 = function (type) {
				// Play/Pause button
				if (type == 'playpause2') {
					if (video2.paused || video2.ended) {
						playpause2.setAttribute('data-state', 'play');
					}
					else {
						playpause2.setAttribute('data-state', 'pause');
					}
				}
				// Mute button
				else if (type == 'mute2') {
					mute2.setAttribute('data-state', video2.muted ? 'unmute' : 'mute');
				}
			}
			var changeButtonState3 = function (type) {
				// Play/Pause button
				if (type == 'playpause3') {
					if (video3.paused || video3.ended) {
						playpause3.setAttribute('data-state', 'play');
					}
					else {
						playpause3.setAttribute('data-state', 'pause');
					}
				}
				// Mute button
				else if (type == 'mute3') {
					mute3.setAttribute('data-state', video3.muted ? 'unmute' : 'mute');
				}
			}
			var changeButtonState4 = function (type) {
				// Play/Pause button
				if (type == 'playpause4') {
					if (video4.paused || video4.ended) {
						playpause4.setAttribute('data-state', 'play');
					}
					else {
						playpause4.setAttribute('data-state', 'pause');
					}
				}
				// Mute button
				else if (type == 'mute4') {
					mute4.setAttribute('data-state', video4.muted ? 'unmute' : 'mute');
				}
			}
			var changeButtonState5 = function (type) {
				// Play/Pause button
				if (type == 'playpause5') {
					if (video5.paused || video5.ended) {
						playpause5.setAttribute('data-state', 'play');
					}
					else {
						playpause5.setAttribute('data-state', 'pause');
					}
				}
				// Mute button
				else if (type == 'mute5') {
					mute5.setAttribute('data-state', video5.muted ? 'unmute' : 'mute');
				}
			}
			var changeButtonState6 = function (type) {
				// Play/Pause button
				if (type == 'playpause6') {
					if (video6.paused || video6.ended) {
						playpause6.setAttribute('data-state', 'play');
					}
					else {
						playpause6.setAttribute('data-state', 'pause');
					}
				}
				// Mute button
				else if (type == 'mute6') {
					mute6.setAttribute('data-state', video6.muted ? 'unmute' : 'mute');
				}
			}
			var changeButtonState7 = function (type) {
				// Play/Pause button
				if (type == 'playpause7') {
					if (video7.paused || video7.ended) {
						playpause7.setAttribute('data-state', 'play');
					}
					else {
						playpause7.setAttribute('data-state', 'pause');
					}
				}
				// Mute button
				else if (type == 'mute7') {
					mute7.setAttribute('data-state', video7.muted ? 'unmute' : 'mute');
				}
			}
			var changeButtonState8 = function (type) {
				// Play/Pause button
				if (type == 'playpause8') {
					if (video8.paused || video8.ended) {
						playpause8.setAttribute('data-state', 'play');
					}
					else {
						playpause8.setAttribute('data-state', 'pause');
					}
				}
				// Mute button
				else if (type == 'mute8') {
					mute8.setAttribute('data-state', video8.muted ? 'unmute' : 'mute');
				}
			}
			var changeButtonState9 = function (type) {
				// Play/Pause button
				if (type == 'playpause9') {
					if (video9.paused || video9.ended) {
						playpause9.setAttribute('data-state', 'play');
					}
					else {
						playpause9.setAttribute('data-state', 'pause');
					}
				}
				// Mute button
				else if (type == 'mute9') {
					mute9.setAttribute('data-state', video9.muted ? 'unmute' : 'mute');
				}
			}
			var changeButtonState10 = function (type) {
				// Play/Pause button
				if (type == 'playpause10') {
					if (video10.paused || video10.ended) {
						playpause10.setAttribute('data-state', 'play');
					}
					else {
						playpause10.setAttribute('data-state', 'pause');
					}
				}
				// Mute button
				else if (type == 'mute10') {
					mute10.setAttribute('data-state', video10.muted ? 'unmute' : 'mute');
				}
			}
			var changeButtonState11 = function (type) {
				// Play/Pause button
				if (type == 'playpause11') {
					if (video11.paused || video11.ended) {
						playpause11.setAttribute('data-state', 'play');
					}
					else {
						playpause11.setAttribute('data-state', 'pause');
					}
				}
				// Mute button
				else if (type == 'mute11') {
					mute11.setAttribute('data-state', video11.muted ? 'unmute' : 'mute');
				}
			}
			var changeButtonState12 = function (type) {
				// Play/Pause button
				if (type == 'playpause12') {
					if (video12.paused || video12.ended) {
						playpause12.setAttribute('data-state', 'play');
					}
					else {
						playpause12.setAttribute('data-state', 'pause');
					}
				}
				// Mute button
				else if (type == 'mute12') {
					mute12.setAttribute('data-state', video12.muted ? 'unmute' : 'mute');
				}
			}
			var changeButtonState13 = function (type) {
				// Play/Pause button
				if (type == 'playpause13') {
					if (video13.paused || video13.ended) {
						playpause13.setAttribute('data-state', 'play');
					}
					else {
						playpause13.setAttribute('data-state', 'pause');
					}
				}
				// Mute button
				else if (type == 'mute13') {
					mute13.setAttribute('data-state', video13.muted ? 'unmute' : 'mute');
				}
			}
			var changeButtonState14 = function (type) {
				// Play/Pause button
				if (type == 'playpause14') {
					if (video14.paused || video14.ended) {
						playpause14.setAttribute('data-state', 'play');
					}
					else {
						playpause14.setAttribute('data-state', 'pause');
					}
				}
				// Mute button
				else if (type == 'mute14') {
					mute14.setAttribute('data-state', video14.muted ? 'unmute' : 'mute');
				}
			}

			// Add event listeners for video specific events
			video.addEventListener('play', function () {
				changeButtonState('playpause');
			}, false);
			video.addEventListener('pause', function () {
				changeButtonState('playpause');
			}, false);
			video1.addEventListener('play', function () {
				changeButtonState1('playpause1');
			}, false);
			video1.addEventListener('pause', function () {
				changeButtonState1('playpause1');
			}, false);
			video2.addEventListener('play', function () {
				changeButtonState2('playpause2');
			}, false);
			video2.addEventListener('pause', function () {
				changeButtonState2('playpause2');
			}, false);
			video3.addEventListener('play', function () {
				changeButtonState3('playpause3');
			}, false);
			video3.addEventListener('pause', function () {
				changeButtonState3('playpause3');
			}, false);
			video4.addEventListener('play', function () {
				changeButtonState4('playpause4');
			}, false);
			video4.addEventListener('pause', function () {
				changeButtonState4('playpause4');
			}, false);
			video5.addEventListener('play', function () {
				changeButtonState5('playpause5');
			}, false);
			video5.addEventListener('pause', function () {
				changeButtonState5('playpause5');
			}, false);
			video6.addEventListener('play', function () {
				changeButtonState6('playpause6');
			}, false);
			video6.addEventListener('pause', function () {
				changeButtonState6('playpause6');
			}, false);
			video7.addEventListener('play', function () {
				changeButtonState7('playpause7');
			}, false);
			video7.addEventListener('pause', function () {
				changeButtonState7('playpause7');
			}, false);
			video8.addEventListener('play', function () {
				changeButtonState8('playpause8');
			}, false);
			video8.addEventListener('pause', function () {
				changeButtonState8('playpause8');
			}, false);
			video9.addEventListener('play', function () {
				changeButtonState9('playpause9');
			}, false);
			video9.addEventListener('pause', function () {
				changeButtonState9('playpause9');
			}, false);
			video10.addEventListener('play', function () {
				changeButtonState10('playpause10');
			}, false);
			video10.addEventListener('pause', function () {
				changeButtonState10('playpause10');
			}, false);
			video11.addEventListener('play', function () {
				changeButtonState11('playpause11');
			}, false);
			video11.addEventListener('pause', function () {
				changeButtonState11('playpause11');
			}, false);
			video12.addEventListener('play', function () {
				changeButtonState12('playpause12');
			}, false);
			video12.addEventListener('pause', function () {
				changeButtonState12('playpause12');
			}, false);
			video13.addEventListener('play', function () {
				changeButtonState13('playpause13');
			}, false);
			video13.addEventListener('pause', function () {
				changeButtonState13('playpause13');
			}, false);
			video14.addEventListener('play', function () {
				changeButtonState14('playpause14');
			}, false);
			video14.addEventListener('pause', function () {
				changeButtonState14('playpause14');
			}, false);


			video.addEventListener('volumechange', function () {
				checkVolume();
			}, false);

			// Add events for all buttons			
			playpause.addEventListener('click', function (e) {
				if (video.paused || video.ended) video.play();
				else video.pause();
			});
			playpause1.addEventListener('click', function (e) {
				if (video1.paused || video1.ended) video1.play();
				else video1.pause();
			});
			playpause2.addEventListener('click', function (e) {
				if (video2.paused || video2.ended) video2.play();
				else video2.pause();
			});
			playpause3.addEventListener('click', function (e) {
				if (video3.paused || video3.ended) video3.play();
				else video3.pause();
			});
			playpause4.addEventListener('click', function (e) {
				if (video4.paused || video4.ended) video4.play();
				else video4.pause();
			});
			playpause5.addEventListener('click', function (e) {
				if (video5.paused || video5.ended) video5.play();
				else video5.pause();
			});
			playpause6.addEventListener('click', function (e) {
				if (video6.paused || video6.ended) video6.play();
				else video6.pause();
			});
			playpause7.addEventListener('click', function (e) {
				if (video7.paused || video7.ended) video7.play();
				else video7.pause();
			});
			playpause8.addEventListener('click', function (e) {
				if (video8.paused || video8.ended) video8.play();
				else video8.pause();
			});
			playpause9.addEventListener('click', function (e) {
				if (video9.paused || video9.ended) video9.play();
				else video9.pause();
			});
			playpause10.addEventListener('click', function (e) {
				if (video10.paused || video10.ended) video10.play();
				else video10.pause();
			});
			playpause11.addEventListener('click', function (e) {
				if (video11.paused || video11.ended) video11.play();
				else video11.pause();
			});
			playpause12.addEventListener('click', function (e) {
				if (video12.paused || video12.ended) video12.play();
				else video12.pause();
			});
			playpause13.addEventListener('click', function (e) {
				if (video13.paused || video13.ended) video13.play();
				else video13.pause();
			});
			playpause14.addEventListener('click', function (e) {
				if (video14.paused || video14.ended) video14.play();
				else video14.pause();
			});


			// The Media API has no 'stop()' function, so pause the video and reset its time and the progress bar
			stop.addEventListener('click', function (e) {
				video.pause();
				video.currentTime = 0;
				progress.value = 0;
				// Update the play/pause button's 'data-state' which allows the correct button image to be set via CSS
				changeButtonState('playpause');
			});

			mute.addEventListener('click', function (e) {
				video.muted = !video.muted;
				changeButtonState('mute');
				console.log(video.muted)
				if (video.muted == false) {
					document.querySelector("#video_id").play();
				} else {
					document.querySelector("#video_id").pause();
				}

			});
			mute1.addEventListener('click', function (e) {
				video1.muted = !video1.muted;
				changeButtonState1('mute1');
				console.log(video1.muted)
				if (video1.muted == false) {
					document.querySelector("#video_id").play();
				} else {
					document.querySelector("#video_id").pause();
				}

			});
			mute2.addEventListener('click', function (e) {
				video2.muted = !video2.muted;
				changeButtonState2('mute2');
				console.log(video2.muted)
				if (video2.muted == false) {
					document.querySelector("#video_id").play();
				} else {
					document.querySelector("#video_id").pause();
				}
			});
			mute3.addEventListener('click', function (e) {
				video3.muted = !video3.muted;
				changeButtonState3('mute3');
				console.log(video3.muted)
				if (video3.muted == false) {
					document.querySelector("#video_id").play();
				} else {
					document.querySelector("#video_id").pause();
				}
			});
			mute4.addEventListener('click', function (e) {
				video4.muted = !video4.muted;
				changeButtonState4('mute4');
				console.log(video4.muted)
				if (video4.muted == false) {
					document.querySelector("#video_id").play();
				} else {
					document.querySelector("#video_id").pause();
				}
			});
			mute5.addEventListener('click', function (e) {
				video5.muted = !video5.muted;
				changeButtonState5('mute5');
				console.log(video5.muted)
				if (video5.muted == false) {
					document.querySelector("#video_id").play();
				} else {
					document.querySelector("#video_id").pause();
				}
			});
			mute6.addEventListener('click', function (e) {
				video6.muted = !video6.muted;
				changeButtonState6('mute6');
				console.log(video6.muted)
				if (video6.muted == false) {
					document.querySelector("#video_id").play();
				} else {
					document.querySelector("#video_id").pause();
				}
			});
			mute7.addEventListener('click', function (e) {
				video7.muted = !video7.muted;
				changeButtonState7('mute7');
				console.log(video7.muted)
				if (video7.muted == false) {
					document.querySelector("#video_id").play();
				} else {
					document.querySelector("#video_id").pause();
				}
			});
			mute8.addEventListener('click', function (e) {
				video8.muted = !video8.muted;
				changeButtonState8('mute8');
				console.log(video8.muted)
				if (video8.muted == false) {
					document.querySelector("#video_id").play();
				} else {
					document.querySelector("#video_id").pause();
				}
			});
			mute9.addEventListener('click', function (e) {
				video9.muted = !video9.muted;
				changeButtonState9('mute9');
				console.log(video9.muted)
				if (video9.muted == false) {
					document.querySelector("#video_id").play();
				} else {
					document.querySelector("#video_id").pause();
				}
			});
			mute10.addEventListener('click', function (e) {
				video10.muted = !video10.muted;
				changeButtonState10('mute10');
				console.log(video10.muted)
				if (video10.muted == false) {
					document.querySelector("#video_id").play();
				} else {
					document.querySelector("#video_id").pause();
				}
			});
			mute11.addEventListener('click', function (e) {
				video11.muted = !video11.muted;
				changeButtonState11('mute11');
				console.log(video11.muted)
				if (video11.muted == false) {
					document.querySelector("#video_id").play();
				} else {
					document.querySelector("#video_id").pause();
				}
			});
			mute12.addEventListener('click', function (e) {
				video12.muted = !video12.muted;
				changeButtonState12('mute12');
				console.log(video12.muted)
				if (video12.muted == false) {
					document.querySelector("#video_id").play();
				} else {
					document.querySelector("#video_id").pause();
				}
			});
			mute13.addEventListener('click', function (e) {
				video13.muted = !video13.muted;
				changeButtonState13('mute13');
				console.log(video13.muted)
				if (video13.muted == false) {
					document.querySelector("#video_id").play();
				} else {
					document.querySelector("#video_id").pause();
				}
			});
			mute14.addEventListener('click', function (e) {
				video14.muted = !video14.muted;
				changeButtonState14('mute14');
				console.log(video14.muted)
				if (video14.muted == false) {
					document.querySelector("#video_id").play();
				} else {
					document.querySelector("#video_id").pause();
				}
			});
			// volinc.addEventListener('click', function (e) {
			// 	alterVolume('+');
			// });
			// voldec.addEventListener('click', function (e) {
			// 	alterVolume('-');
			// });
			fs.addEventListener('click', function (e) {
				handleFullscreen();
			});
			fs1.addEventListener('click', function (e) {
				handleFullscreen();
			});
			fs2.addEventListener('click', function (e) {
				handleFullscreen();
			});
			fs3.addEventListener('click', function (e) {
				handleFullscreen();
			});
			fs4.addEventListener('click', function (e) {
				handleFullscreen();
			});
			fs5.addEventListener('click', function (e) {
				handleFullscreen();
			});
			fs6.addEventListener('click', function (e) {
				handleFullscreen();
			});
			fs7.addEventListener('click', function (e) {
				handleFullscreen();
			});
			fs8.addEventListener('click', function (e) {
				handleFullscreen();
			});
			fs9.addEventListener('click', function (e) {
				handleFullscreen();
			});
			fs10.addEventListener('click', function (e) {
				handleFullscreen();
			});
			fs11.addEventListener('click', function (e) {
				handleFullscreen();
			});
			fs12.addEventListener('click', function (e) {
				handleFullscreen();
			});
			fs13.addEventListener('click', function (e) {
				handleFullscreen();
			});
			fs14.addEventListener('click', function (e) {
				handleFullscreen();
			});


			// As the video is playing, update the progress bar
			video.addEventListener('timeupdate', function () {
				// For mobile browsers, ensure that the progress element's max attribute is set
				if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
				progress.value = video.currentTime;
				progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
			});

			// React to the user clicking within the progress bar
			progress.addEventListener('click', function (e) {
				//var pos = (e.pageX  - this.offsetLeft) / this.offsetWidth; // Also need to take the parent into account here as .controls now has position:relative
				var pos = (e.pageX - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
				video.currentTime = pos * video.duration;
			});

			// Listen for fullscreen change events (from other controls, e.g. right clicking on the video itself)
			document.addEventListener('fullscreenchange', function (e) {
				setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
			});
			document.addEventListener('webkitfullscreenchange', function () {
				setFullscreenData(!!document.webkitIsFullScreen);
			});
			document.addEventListener('mozfullscreenchange', function () {
				setFullscreenData(!!document.mozFullScreen);
			});
			document.addEventListener('msfullscreenchange', function () {
				setFullscreenData(!!document.msFullscreenElement);
			});
		}
	}

})();