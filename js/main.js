document.body.style.overflow = "hidden";

// Start Loading Screen
let loadingScreen = document.getElementById('loading-screen');
let loadingIcon = document.getElementById('loading-icon');
window.addEventListener('load', async () => {
    await setTimeout(() => {
        loadingIcon.style.opacity = 0;
    }, 1000);
    await setTimeout(() => {
        loadingScreen.style.opacity = 0;
    }, 2000);
    
    
    setTimeout(() => {
        loadingScreen.remove();
        document.body.style.overflowY = "auto";
    }, 5000);
});
// End Loading Screen


// Start Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// End Back to Top Button


// start navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
//end navbar


// ================= Start Testimonials Carousel =================
const track = document.getElementById("carouselTrack");
let cards = document.querySelectorAll(".review");
const firstClone = cards[0].cloneNode(true);
const lastClone = cards[cards.length-1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, cards[0]);

cards = document.querySelectorAll(".review");
let index = 1;
const cardWidth = cards[0].offsetWidth;

track.style.transform = `translateX(-${cardWidth}px)`;

function shiftRight(){
    if(index >= cards.length-1) return;

    index++;
    track.style.transition=".5s";
    track.style.transform=`translateX(-${index*cardWidth}px)`;
}

function shiftLeft(){
    if(index<=0) return;

    index--;
    track.style.transition=".5s";
    track.style.transform=`translateX(-${index*cardWidth}px)`;
}

track.addEventListener("transitionend",()=>{

    if(cards[index].isSameNode(firstClone)){
        track.style.transition="none";
        index=1;
        track.style.transform=`translateX(-${index*cardWidth}px)`;
    }

    if(cards[index].isSameNode(lastClone)){
        track.style.transition="none";
        index=cards.length-2;
        track.style.transform=`translateX(-${index*cardWidth}px)`;
    }

});
// ================= End Testimonials Carousel =================



// ================= Start Lightbox Gallery =================

// Select all gallery images
var imgs = document.querySelectorAll(".page-5 .pizza-img");
console.log(imgs.length);

// Select required elements
var imgs = document.querySelectorAll(".page-5 .image");
var box = document.querySelector(".box");
var boxImg = document.querySelector(".box-img");
var curIndex = 0;

// Open lightbox when clicking an image
for (let i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function () {
    console.log("clicked");

    box.classList.remove("d-none");

    var imgSrc = imgs[i].querySelector("img").src;
    curIndex = i;
    boxImg.style.backgroundImage = `url(${imgSrc})`;
  };
}

// Close lightbox
document.querySelector("#close").onclick = function () {
  box.classList.add("d-none");
};

// Show next image
document.querySelector("#right").onclick = function () {
  curIndex = (curIndex + 1) % imgs.length;
  var imgSrc = imgs[curIndex].querySelector("img").src;
  boxImg.style.backgroundImage = `url(${imgSrc})`;
};

// Show previous image
document.querySelector("#left").onclick = function () {
  curIndex = (curIndex - 1 + imgs.length) % imgs.length;
  var imgSrc = imgs[curIndex].querySelector("img").src;
  boxImg.style.backgroundImage = `url(${imgSrc})`;
};

// Prevent closing when clicking inside the image
boxImg.addEventListener("click", function (e) {
  e.stopPropagation();
});

// Close lightbox when clicking outside
box.addEventListener("click", function () {
  box.classList.add("d-none");
});

// ================= End Lightbox Gallery =================