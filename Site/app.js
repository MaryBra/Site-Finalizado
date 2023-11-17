//Funcao "hamburger" de quando o site fica responsivo
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", ()=> nav.classList.toggle("active"));

//Funcao de passar as fotos dos cachorros pra adocao

let currentSlide = 0;
showSlide(currentSlide);

// Use document.querySelectorAll to select all elements with the specified class
document.querySelectorAll('.prevBtn').forEach(button => {
    button.addEventListener('click', function () {
        prevSlide();
    });
});

document.querySelectorAll('.nextBtn').forEach(button => {
    button.addEventListener('click', function () {
        nextSlide();
    });
});

function showSlide(n) {
    const slides = document.getElementsByClassName("carousel-slide");

    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlide].style.display = "block";
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}