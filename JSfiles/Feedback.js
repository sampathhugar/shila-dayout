function initializeFeedbackSwiper() {
    if (window.innerWidth < 655) {
      if (!document.querySelector(".feedback-card__content").swiper) {
        const feedbackswiperCards = new Swiper(".feedback-card__content", {
          loop: true,
          spaceBetween: 60,
          grabCursor: true,
          autoplay: {
            delay: 3500, // 5 seconds
            disableOnInteraction: false, // Allow manual stopping on interaction
          },
          breakpoints: {
            800: {
              slidesPerView: 2,
            },
            1050: {
              slidesPerView: 2.5,
            },
            1150: {
              slidesPerView: 3,
            },
          },
        });
  
        // Stop autoplay when the user interacts
        feedbackswiperCards.on("touchStart", () => {
          feedbackswiperCards.autoplay.stop();
        });
  
        feedbackswiperCards.on("pointerEnter", () => {
          feedbackswiperCards.autoplay.stop();
        });
  
        // Restart autoplay after interaction ends
        feedbackswiperCards.on("touchEnd", () => {
          feedbackswiperCards.autoplay.start();
        });
  
        feedbackswiperCards.on("pointerLeave", () => {
          feedbackswiperCards.autoplay.start();
        });
  
        // Optionally log slide changes
        feedbackswiperCards.on("slideChange", () => {
        });
      }
    } else {
      // Destroy Swiper if initialized and viewport is larger than 655px
      const swiperInstance = document.querySelector(".feedback-card__content").swiper;
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
      }
    }
  }
  
  // Add event listener for window resize
  window.addEventListener("resize", initializeFeedbackSwiper);
  
  // Initialize on page load
  initializeFeedbackSwiper();
  