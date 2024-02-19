document.addEventListener("DOMContentLoaded", function() {
    const cardSlider = document.getElementById("cardSlider");
    const sliderContainer = document.getElementById("sliderContainer");
  
    // Clone cards for seamless loop
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      cardSlider.appendChild(clone);
    });
  
    // Pause animation on hover
    sliderContainer.addEventListener("mouseover", function() {
      cardSlider.style.animationPlayState = "paused";
    });
  
    // Resume animation on hover out
    sliderContainer.addEventListener("mouseout", function() {
      cardSlider.style.animationPlayState = "running";
    });
  });
  