// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

// Моб. версия
fakeResize = false
fakeResize2 = true

if (document.body.clientWidth < 375) {
	document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
}

$(() => {
	if ($('.slider-photo').length) {
		new Swiper(".slider-photo", {
			loop: true,
			spaceBetween: 4,
			slidesPerView: 2,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},breakpoints: {
				'320': {
					spaceBetween: 4,
					slidesPerView: 2
				},
				'480': {
					spaceBetween: 8,
					slidesPerView: 2
				},
				'768': {
					spaceBetween: 8,
					slidesPerView: 3
				}
			},
		})
	}


	let dpMin, dpMax, dpMin2, dpMax2;

	dpMin = new AirDatepicker('#datepickerStart', {
		onSelect({date}) {
			dpMax.update({
				minDate: date
			})
		}
	})

	dpMax = new AirDatepicker('#datepickerEnd', {
		onSelect({date}) {
			dpMin.update({
				maxDate: date
			})
		}
	})

	dpMin2 = new AirDatepicker('#datepickerStart2', {
		isMobile: true,
    	autoClose: true,
		onSelect({date}) {
			dpMax2.update({
				minDate: date
			})
		}
	})

	dpMax2 = new AirDatepicker('#datepickerEnd2', {
		isMobile: true,
    	autoClose: true,
		onSelect({date}) {
			dpMin2.update({
				maxDate: date
			})
		}
	})
});


$(window).on('resize', () => {
	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
});