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

