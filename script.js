const guideName = "Manila Nature Spots";
const currentYear = new Date().getFullYear();

let runningCount = 0;

// Guide name
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

// Copyright
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        `© ${currentYear} Jay Mella - ${guideName}`;
}

// Console
console.log("Guide name:", guideName);
console.log("Current year:", currentYear);
console.log("Places reviewed:", runningCount);