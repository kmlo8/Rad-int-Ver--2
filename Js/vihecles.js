// Show and HIde Popup container
function showCarDetails(carName) {
    const popupContainer = document.getElementById("carDetailsPopup");
    popupContainer.style.display = "block";

    const carDetails = carsDatabase[carName];

    if (carDetails) {
        const popup = document.querySelector(".popup-content");
        const priceUSD = document.querySelector("#price-usd");
        const priceKRW = document.querySelector("#price-krw");
        const carTitle = popup.querySelector("#car-title");
        const interiorColor = popup.querySelector("#interior-color");
        const exteriorColor = popup.querySelector("#exterior-color");
        const fuelType = popup.querySelector("#fuel-type");
        const engine = popup.querySelector("#engine");
        const vin = popup.querySelector("#vin");
        const convenience = popup.querySelector("#convenience");
        const environment = popup.querySelector("#environment");
        const exterior = popup.querySelector("#exterior");
        const safety = popup.querySelector("#safety");

        // Update popup content
        carTitle.textContent = carName;
        priceUSD.textContent = carDetails.priceUSD;
        priceKRW.textContent = carDetails.priceKRW;
        interiorColor.textContent = carDetails.interiorColor;
        exteriorColor.textContent = carDetails.exteriorColor;
        fuelType.textContent = carDetails.fuelType;
        engine.textContent = carDetails.engine;
        vin.textContent = carDetails.vin;
        convenience.textContent = carDetails.convenience;
        environment.textContent = carDetails.environment;
        exterior.textContent = carDetails.exterior;
        safety.textContent = carDetails.safety;

        // Update the image source within the slider
        const slider = popup.querySelector(".slider");
        slider.innerHTML = carDetails.images.map(images => `<img src="images/${images}" alt="${carName} Image">`).join('');

    } else {
        console.log("Car details not found.");
    }
}

function hideCarDetails() {
    const popupContainer = document.getElementById("carDetailsPopup");
    popupContainer.style.display = "none";
}

$(document).ready(function () {
// Popup container slider 
    const slider = $(".slider");
    const prevBtn = $(".prev");
    const nextBtn = $(".next");
    const slideWidth = $(".slider-container").width();
    let currentPosition = 0;

    nextBtn.click(function () {
        currentPosition -= slideWidth;
        if (currentPosition < -slideWidth * (slider.children().length - 1)) {
            currentPosition = 0;
        }
        slider.css("transform", `translateX(${currentPosition}px)`);
    });

    prevBtn.click(function () {
        currentPosition += slideWidth;
        if (currentPosition > 0) {
            currentPosition = -slideWidth * (slider.children().length - 1);
        }
        slider.css("transform", `translateX(${currentPosition}px)`);
    });

});