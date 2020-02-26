
import { Swiper, Navigation } from 'swiper/js/swiper.esm'
import GnativeCarousel from './GnativeCarousel'

window.addEventListener('load', () => {

	Swiper.use([Navigation]);

	new Swiper('.bigSec .container .bigSec__wrapperSwiper .bigSec__swiper-container', {
		loop: true,
		slidesPerView: 1,
		navigation: {
			nextEl: '.bigSec .container .bigSec__wrapperSwiper .bigSec__sliderButtons .bigSec__chevron_left',
			prevEl: '.bigSec .container .bigSec__wrapperSwiper .bigSec__sliderButtons .bigSec__chevron_right',
		}
	})

	/* new Swiper('.cardSlider .container .cardSlider__wrapperSwiper .cardSlider__swiper-container', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			nextEl: '.cardSlider .container .cardSlider__wrapperSwiper .cardSlider__sliderButtons .cardSlider__chevron_left',
			prevEl: '.cardSlider .container .cardSlider__wrapperSwiper .cardSlider__sliderButtons .cardSlider__chevron_right',
		}
  }) */
  
  // console.log(document.querySelector('.cardSlider .container .GnativeCarousel .GnativeCarousel__itemsContainer'))

  new GnativeCarousel({
		mainElement: {
			class: 'first',
			keepOrder: true
		},
		animationTime: 500,
		sliderContainer: '.cardSlider .container .GnativeCarousel',
		itemsContainer: '.cardSlider .container .GnativeCarousel .GnativeCarousel__itemsContainer',
		staticItem: '.cardSlider .container .GnativeCarousel .GnativeCarousel__staticItem',
		btnsContainer: '.cardSlider .container .GnativeCarousel__buttons',
		btnNext: '.cardSlider .container .GnativeCarousel__buttons .GnativeCarousel__chevron_right',
		btnPrev: '.cardSlider .container .GnativeCarousel__buttons .GnativeCarousel__chevron_left',
		itemsOnSide: 1,
    adaptive: true,
		breakpoints: {
      '1230': { adaptive: false }
      /* ,
			'960': { itemsOnSide: 3, responsive: true },
			'768': { itemsOnSide: 2 }, */
		}
  }).createSlider()
  
  
})