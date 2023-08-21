
const cards = document.querySelectorAll('.program-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let activeCardIndex = -1;

function setActiveCard(index) {
    cards.forEach((card, i) => {
        if (i === index) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}
prevBtn.addEventListener('click', () => {
    activeCardIndex = Math.max(activeCardIndex - 1, 0);
    setActiveCard(activeCardIndex);
});

nextBtn.addEventListener('click', () => {
    activeCardIndex = Math.min(activeCardIndex + 1, cards.length - 1);
    setActiveCard(activeCardIndex);
});

setActiveCard(activeCardIndex);



const panels = document.querySelectorAll(".right-part");
const prev = document.getElementById("prevButton");
const next = document.getElementById("nextButton");
const prevProgram = document.getElementById("prevButtonPrgram");
const nextProgram = document.getElementById("nextButtonProgram");
const programs = document.querySelectorAll(".all-programs-card");
let currentActive = 0;
let currentActiveProgram = 0;


next.addEventListener("click", () => {
    currentActive++;

    if (currentActive > panels.length) {
        currentActive = panels.length;
    }

    update();
});

prev.addEventListener("click", () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 0;
    }
    update();
});

function update() {
    removeActiveClasses();
    panels[currentActive].classList.remove("hidden");

    if (currentActive === 0) {
        prev.disabled = true;
    } else if (currentActive === panels.length - 1) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.add("hidden");
    });
}







