// nav 01 signin button event
function showCard(){
    document.getElementById("card").style.display="block";
}
function hideCard(){
    document.getElementById("card").style.display="none"
}

// hamburger JS

function openMenu(){

    var sidebar = document.getElementById("sidebar");

    sidebar.classList.add("active");

}

function closeMenu(){

    var sidebar = document.getElementById("sidebar");

    sidebar.classList.remove("active");

}


// function openMenu(){

//     var sidebar = document.getElementById("sidebar");

//     sidebar.classList.toggle("active");

// }

// section 3 slider js

let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(i){
    if(i >= slides.length) index = 0;
    else if(i < 0) index = slides.length - 1;
    else index = i;

    document.querySelector(".slides").style.transform =
        `translateX(${-index * 100}%)`;
}

function changeSlide(step){
    showSlide(index + step);
}

// auto slide every 6 seconds
setInterval(() => {
    changeSlide(1);
}, 6000);

// section 5 cards slider js

window.addEventListener('load', function() {
  // Grab all custom slider instances on the page
  const sliders = document.querySelectorAll('.custom-slider-scope .custom-carousel-zone');
  
  sliders.forEach(slider => {
    const viewport = slider.querySelector('.carousel-track-viewport');
    const prevBtn = slider.querySelector('.btn-prev');
    const nextBtn = slider.querySelector('.btn-next');
    
    // Check if the required elements exist in the DOM
    if (viewport && prevBtn && nextBtn) {
      
      /**
       * Dynamically calculates how far to scroll based on screen size.
       * If it's a desktop view, it jumps 2 cards forward/backward.
       * If it fails to read the card size, it falls back to a safe default.
       */
      const getScrollStep = () => {
        const firstCard = viewport.querySelector('.carousel-item-card');
        
        if (firstCard && firstCard.offsetWidth > 0) {
          // Check screen width to adjust step sizes dynamically if needed
          const isMobile = window.innerWidth <= 768;
          return isMobile ? firstCard.offsetWidth : firstCard.offsetWidth * 2;
        }
        return 350; // Dynamic fallback measure in pixels
      };

      // Desktop/Mouse Control: Click next to slide forward
      nextBtn.addEventListener('click', () => {
        viewport.scrollBy({ 
          left: getScrollStep(), 
          behavior: 'smooth' 
        });
      });

      // Desktop/Mouse Control: Click prev to slide backward
      prevBtn.addEventListener('click', () => {
        viewport.scrollBy({ 
          left: -getScrollStep(), 
          behavior: 'smooth' 
        });
      });
      
      /**
       * Optional UX polish: Hides navigation buttons if the slider
       * hits the absolute beginning or end of its horizontal scroll limits.
       */
      const toggleButtonVisibility = () => {
        const scrollLeft = viewport.scrollLeft;
        const maxScroll = viewport.scrollWidth - viewport.clientWidth;
        
        // Hide left button if we are at the very beginning
        prevBtn.style.visibility = scrollLeft <= 5 ? 'hidden' : 'visible';
        // Hide right button if we are at the very end
        nextBtn.style.visibility = scrollLeft >= (maxScroll - 5) ? 'hidden' : 'visible';
      };

      // Run visibility check immediately on load, and then on every scroll movement
      toggleButtonVisibility();
      viewport.addEventListener('scroll', toggleButtonVisibility);
      
      // Keep alignment smooth if the browser window changes sizes
      window.addEventListener('resize', toggleButtonVisibility);
    }
  });
});

// esction 6 & 7 slider js



const slider = document.getElementById("sliderTrack");

let autoScroll;

function startSlider(){

    autoScroll = setInterval(() => {

        slider.scrollLeft += 240;

        // Restart slider
        if(
            slider.scrollLeft + slider.clientWidth >= slider.scrollWidth
        ){
            slider.scrollLeft = 0;
        }

    }, 2000);

}

startSlider();

// section 8 & 9 js

const track = document.querySelector(".custom-shopper-slider-track");

const next = document.querySelector(".next-btn");

const prev = document.querySelector(".prev-btn");

/* NEXT BUTTON */
next.addEventListener("click", () => {

  track.scrollBy({
    left: 300,
    behavior: "smooth"
  });

});

/* PREVIOUS BUTTON */
prev.addEventListener("click", () => {

  track.scrollBy({
    left: -300,
    behavior: "smooth"
  });

});


// esc tion 11 js

const sec11Slider = document.getElementById('sec11CardSlider');
const sec11PrevBtn = document.getElementById('sec11PrevBtn');
const sec11NextBtn = document.getElementById('sec11NextBtn');

// Calculate custom slide skip steps dynamically based on current viewport size
const getScrollStep = () => sec11Slider.clientWidth * 0.75;

sec11NextBtn.addEventListener('click', () => {
  sec11Slider.scrollLeft += getScrollStep();
});

sec11PrevBtn.addEventListener('click', () => {
  sec11Slider.scrollLeft -= getScrollStep();
});

// Real-time listener checking track boundaries to hide inactive navigation buttons
sec11Slider.addEventListener('scroll', () => {
  // Check start boundary
  if (sec11Slider.scrollLeft <= 0) {
    sec11PrevBtn.style.opacity = '0';
    sec11PrevBtn.style.pointerEvents = 'none';
  } else {
    sec11PrevBtn.style.opacity = '1';
    sec11PrevBtn.style.pointerEvents = 'auto';
  }

  // Check end boundary
  if (sec11Slider.scrollLeft + sec11Slider.clientWidth >= sec11Slider.scrollWidth - 5) {
    sec11NextBtn.style.opacity = '0';
    sec11NextBtn.style.pointerEvents = 'none';
  } else {
    sec11NextBtn.style.opacity = '1';
    sec11NextBtn.style.pointerEvents = 'auto';
  }
});

// Configure initial UI render settings
window.addEventListener('load', () => {
  sec11PrevBtn.style.opacity = '0';
  sec11PrevBtn.style.pointerEvents = 'none';
});

// esction 12 js

window.addEventListener("load", function () {

    const slider = document.querySelector(".product-slider");
    const cards = document.querySelectorAll(".product-card");

    let index = 0;

    function getCardWidth() {
        return cards[0].offsetWidth + 20; // card width + gap
    }

    setInterval(() => {

        index++;

        if (index >= cards.length) {
            index = 0;
        }

        slider.scrollTo({
            left: index * getCardWidth(),
            behavior: "smooth"
        });

    }, 2000);

});