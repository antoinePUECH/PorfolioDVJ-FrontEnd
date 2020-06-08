var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 20,
      stretch: -200,
      depth: 500,
      modifier: 1.5,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.test-next',
        prevEl: '.test-prev',
      },
  });