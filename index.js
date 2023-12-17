let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")


// HOME SCORE FUNCTIONS

function homeAdd1Point() {
    homeScore += 1
    homeScoreEl.textContent = homeScore;
}

function homeAdd2Points() {
    homeScore += 2
    homeScoreEl.textContent = homeScore;
}

function homeAdd3Points() {
    homeScore += 3
    homeScoreEl.textContent = homeScore;
}

// GUEST SCORE FUNCTIONS

function guestAdd1Point() {
    guestScore += 1
    guestScoreEl.textContent = guestScore;
}

function guestAdd2Points() {
    guestScore += 2
    guestScoreEl.textContent = guestScore;
}

function guestAdd3Points() {
    guestScore += 3
    guestScoreEl.textContent = guestScore;
}

// RESET FUNCTION

function reset() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}
