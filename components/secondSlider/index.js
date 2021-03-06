Vue.component('second-slider', {
    template: `
    <swiper :options="secondSwiperOptions">
     <div class="swiper-pagination" slot="pagination"></div>
     <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    `,
    data: function () {
        return {
            secondSwiperOptions: {
                effect: 'coverflow',
                loop: true,
                preventClicksPropagation: false,
                slidesPerView: 3,
                spaceBetween: 30,
                preventClicks: false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                initialSlide: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: false
                },
                touchStartPreventDefault: false,
                passiveListeners: false,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 5,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                },
            }
        }

    }
})