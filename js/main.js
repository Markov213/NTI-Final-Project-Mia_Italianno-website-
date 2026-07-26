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


// start navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
//end navbar



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