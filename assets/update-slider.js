(function () {
	function swiperInit() {
		subSliderInit(true);
		sliderInit(true);
		popupSliderInit(true);
	}

	window.addEventListener('resize', function () {
		$('.js-media-list').each(function () {
			this.swiper?.destroy();
		});
		$('.js-media-sublist').each(function () {
			this.swiper?.destroy();
		});
		$('.js-popup-slider').each(function () {
			this.swiper?.destroy();
		});

		swiperInit();
	});

	document.addEventListener('shopify:section:load', function (e) {
		swiperInit();
	});

	swiperInit();
})();
