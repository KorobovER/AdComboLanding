function startTimer() {
    let minutes = 30;
    let seconds = 0;

    let x = setInterval(function () {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(x);
                setTimeout(() => {
                    minutes = 30;
                    seconds = 0;
                    document.getElementById("minutes").innerHTML = minutes;
                    document.getElementById("seconds").innerHTML = seconds;
                    startTimer();
                }, 1000);
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }

        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
    }, 1000);
}

startTimer();

function adjustCardWidth() {
    const container = document.querySelector('.card-container');
    const cards = Array.from(document.querySelectorAll('.card'));

    const containerWidth = container.clientWidth;
    const cardWidth = cards[0].offsetWidth;
    const cardsPerRow = Math.floor(containerWidth / cardWidth);

    cards.forEach((card, index) => {
        if (index >= cardsPerRow) {
            card.classList.add('full-width');
        } else {
            card.classList.remove('full-width');
        }
    });
}

window.addEventListener('resize', adjustCardWidth);

window.addEventListener('resize', adjustCardWidth);

window.addEventListener('resize', adjustCardWidth);

window.addEventListener('resize', adjustCardWidth);
adjustCardWidth();

document.querySelectorAll('.btn-card').forEach(btn => {
    btn.addEventListener('mouseover', function () {
        const card = btn.closest('.card');
        const hoverBlock = btn.closest('.card').querySelector('.hover-block');
        if (card) {
            card.style.background = '#9564AA';
        }
        if (hoverBlock) {
            hoverBlock.style.display = 'block'
        }
    });

    btn.addEventListener('mouseout', function () {
        const card = btn.closest('.card');
        const hoverBlock = btn.closest('.card').querySelector('.hover-block');
        if (card) {
            card.style.background = '';
        }
        if (hoverBlock) {
            hoverBlock.style.display = 'none'
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const totalSlides = slide.length;
    let currentSlide = 0;
    let slideWidth = 100 / totalSlides;

    function showSlide(index) {
        slides.style.transform = `translateX(-${index * slideWidth}%)`;
    }

    function createNavigation() {
        const navigation = document.querySelector('.navigation');
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', function () {
                currentSlide = i;
                showSlide(currentSlide);
                setActiveDot(currentSlide);
            });
            navigation.appendChild(dot);
        }
    }

    function setActiveDot(index) {
        document.querySelectorAll('.dot').forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    createNavigation();

    let startX;
    let endX;
    slider.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', function (e) {
        endX = e.changedTouches[0].clientX;
        if (endX - startX > 50) {
            if (currentSlide > 0) {
                currentSlide--;
                showSlide(currentSlide);
                setActiveDot(currentSlide);
            }
        } else if (startX - endX > 50) {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                showSlide(currentSlide);
                setActiveDot(currentSlide);
            }
        }
    });
});