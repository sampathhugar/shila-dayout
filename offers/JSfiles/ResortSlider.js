if (!window.ResortSwiperCards) {
    window.ResortSwiperCards = new Swiper(".resort-card__content", {
      loop: true,
      spaceBetween: 10,
      grabCursor: true,
  
      autoplay: {
        delay: 2000, // 2 seconds
        disableOnInteraction: false,
      },
  
      breakpoints: {
        600: {
          slidesPerView: 2,
        },
        968: {
          slidesPerView: 3,
        },
      },
    });
  }

  document.getElementById("staycation-slide-mobile").addEventListener("click", function () {
    const staycationContainer = document.getElementById("staycation-container");
    if (staycationContainer) {
        staycationContainer.scrollIntoView({ behavior: "smooth" });
    }
  });