const homeScoreBtnOne = document.getElementById("home-score-btn-1");
const homeScoreBtnTwo = document.getElementById("home-score-btn-2");
const homeScoreBtnThree = document.getElementById("home-score-btn-3");

const guestScoreBtnOne = document.getElementById("guest-score-btn-1");
const guestScoreBtnTwo = document.getElementById("guest-score-btn-2");
const guestScoreBtnThree = document.getElementById("guest-score-btn-3");

const homeStoreEl = document.getElementById("home-score");
const guestStoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;
// let resetScore = document.getElementsByClassName("both-score");

function increaseHomeScoreOne() {
  homeScore += 1;
  homeStoreEl.textContent = homeScore;

  if (homeStoreEl.textContent === guestStoreEl.textContent) {
    document.getElementById("home-score").style.color = "white";
    document.getElementById("guest-score").style.color = "white";
  } else if (homeStoreEl.textContent > guestStoreEl.textContent) {
    document.getElementById("home-score").style.color = "yellow";
    document.getElementById("guest-score").style.color = "#f94f6d";
  } else {
    document.getElementById("home-score").style.color = "#f94f6d";
    document.getElementById("guest-score").style.color = "yellow";
  }
}

function increaseHomeScoreTwo() {
  homeScore += 2;
  homeStoreEl.textContent = homeScore;

  if (homeStoreEl.textContent === guestStoreEl.textContent) {
    document.getElementById("home-score").style.color = "white";
    document.getElementById("guest-score").style.color = "white";
  } else if (homeStoreEl.textContent > guestStoreEl.textContent) {
    document.getElementById("home-score").style.color = "yellow";
    document.getElementById("guest-score").style.color = "#f94f6d";
  } else {
    document.getElementById("home-score").style.color = "#f94f6d";
    document.getElementById("guest-score").style.color = "yellow";
  }
}

function increaseHomeScoreThree() {
  homeScore += 3;
  homeStoreEl.textContent = homeScore;

  if (homeStoreEl.textContent === guestStoreEl.textContent) {
    document.getElementById("home-score").style.color = "white";
    document.getElementById("guest-score").style.color = "white";
  } else if (homeStoreEl.textContent > guestStoreEl.textContent) {
    document.getElementById("home-score").style.color = "yellow";
    document.getElementById("guest-score").style.color = "#f94f6d";
  } else {
    document.getElementById("home-score").style.color = "#f94f6d";
    document.getElementById("guest-score").style.color = "yellow";
  }
}

function increaseGuestScoreOne() {
  guestScore += 1;
  guestStoreEl.textContent = guestScore;

  if (homeStoreEl.textContent === guestStoreEl.textContent) {
    document.getElementById("home-score").style.color = "white";
    document.getElementById("guest-score").style.color = "white";
  } else if (homeStoreEl.textContent < guestStoreEl.textContent) {
    document.getElementById("home-score").style.color = "#f94f6d";
    document.getElementById("guest-score").style.color = "yellow";
  } else if (guestStoreEl.textContent > homeStoreEl.textContent) {
    document.getElementById("home-score").style.color = "#f94f6d";
    document.getElementById("guest-score").style.color = "yellow";
  }
  // } else {
  //   document.getElementById("home-score").style.color = "yellow";
  //   document.getElementById("guest-score").style.color = "#f94f6d";
  // }
}

function increaseGuestScoreTwo() {
  guestScore += 2;
  guestStoreEl.textContent = guestScore;

  if (homeStoreEl.textContent === guestStoreEl.textContent) {
    document.getElementById("home-score").style.color = "white";
    document.getElementById("guest-score").style.color = "white";
  } else if (homeStoreEl.textContent < guestStoreEl.textContent) {
    document.getElementById("home-score").style.color = "#f94f6d";
    document.getElementById("guest-score").style.color = "yellow";
  } else if (guestStoreEl.textContent > homeStoreEl.textContent) {
    document.getElementById("home-score").style.color = "#f94f6d";
    document.getElementById("guest-score").style.color = "yellow";
  }
  // } else {
  //   document.getElementById("home-score").style.color = "yellow";
  //   document.getElementById("guest-score").style.color = "#f94f6d";
  // }
}

function increaseGuestScoreThree() {
  guestScore += 3;
  guestStoreEl.textContent = guestScore;

  if (homeStoreEl.textContent === guestStoreEl.textContent) {
    document.getElementById("home-score").style.color = "white";
    document.getElementById("guest-score").style.color = "white";
  } else if (homeStoreEl.textContent < guestStoreEl.textContent) {
    document.getElementById("home-score").style.color = "#f94f6d";
    document.getElementById("guest-score").style.color = "yellow";
  } else if (guestStoreEl.textContent > homeStoreEl.textContent) {
    document.getElementById("home-score").style.color = "#f94f6d";
    document.getElementById("guest-score").style.color = "yellow";
  }
}

function resetBothScores() {
  homeScore = 0;
  homeStoreEl.textContent = homeScore;
  document.getElementById("home-score").style.color = "#f94f6d";
  guestScore = 0;
  guestStoreEl.textContent = guestScore;
  document.getElementById("guest-score").style.color = "#f94f6d";
}

const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl.innerHTML = minutes + ": " + seconds;
  time--;
}
if (countdownEl.innerHTML < 0) {
  clearInterval();
}
