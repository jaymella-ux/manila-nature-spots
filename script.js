
const guideName = "Manila Nature Spots";
const currentYear = new Date().getFullYear();

let runningCount = 0;

// Display guide name
const guideNameElement = document.getElementById("guide-name");

if (guideNameElement) {
    guideNameElement.textContent = "🌿 " + guideName;
}

// Count places
const places = document.querySelectorAll(".nature-place");

runningCount = places.length;

const placeCountElement = document.getElementById("place-count");

if (placeCountElement) {
    placeCountElement.textContent = runningCount;
}

// Display copyright
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        `© ${currentYear} Jay Mella - ${guideName}`;
}

// Rating decision
const rating = 4.5;
let ratingLabel;

if (rating >= 4) {
    ratingLabel = "Highly recommended";
} else if (rating >= 2.5) {
    ratingLabel = "Worth a visit";
} else {
    ratingLabel = "Only if you're nearby";
}

const ratingElement = document.getElementById("rating-result");

if (ratingElement) {
    ratingElement.textContent = ratingLabel;
}

// Budget decision
const priceLevel = 2;
const isOpen = true;

const budgetMessage =
    priceLevel <= 2 && isOpen === true
        ? "Good option right now"
        : "Maybe another time";

const budgetElement = document.getElementById("budget-result");

if (budgetElement) {
    budgetElement.textContent = budgetMessage;
}

// Distance decision
const isWithinWalkingDistance = false;

const distanceMessage = isWithinWalkingDistance === true
    ? "Walking distance"
    : "Better to commute";

const distanceElement = document.getElementById("distance-result");

if (distanceElement) {
    distanceElement.textContent = distanceMessage;
}

// Console messages
console.log("Guide name:", guideName);
console.log("Current year:", currentYear);
console.log("Places reviewed:", runningCount);
console.log("Rating result:", ratingLabel);
console.log("Budget result:", budgetMessage);
console.log("Distance result:", distanceMessage);
