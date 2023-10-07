var form = document.querySelector('.contact-form');

// Get all the input elements within the form
var inputs = form.querySelectorAll('input');

// Store the original label color and background color
var originalLabelColor = window.getComputedStyle(document.querySelector('.contact-form label')).color;
var originalBrColor = window.getComputedStyle(document.querySelector('.contact-form input')).borderColor;

// Add a focus event listener to each input
inputs.forEach(function (input) {
    var label = input.previousElementSibling;

    input.addEventListener('focus', function () {
        // Change the label color to white
        label.style.color = 'white';

        // Revert the background color to default
        input.style.borderColor = originalBgColor;
    });

    input.addEventListener('blur', function () {
        // Get the value of the input
        var inputValue = input.value.trim();

        // Check if the input value is a valid email
        if (input.type === 'email' && !isValidEmail(inputValue)) {
            // Change the background color to red if it's not a valid email
            input.style.borderColor = 'red';
        } else {
            // Revert the background color to default if it's a valid email or other input types
            input.style.borderColor = originalBgColor;
        }

        // Revert the label color to its original state
        label.style.color = originalLabelColor;
    });
});


var countryCodeSelect = document.getElementById('codes');
var phoneInput = document.getElementById('phone');

countryCodeSelect.addEventListener('change', function () {
  var selectedCountryCode = this.value;

  phoneInput.focus();
});


// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



$(document).ready(function () {

    $('ul.menu-container > li')
        .click(function (e) {
            $('ul.menu-container > li')
                .removeClass('active');
            $(this).addClass('active');
        });
});

document.querySelectorAll('input[type="text"]').forEach(e => {
    e.addEventListener('focusout', setInputBackground)
});

function setInputBackground() {
    this.style.borderColor = !!this.value ? "#949494" : "red";
}


$(".Vihecles").click(function () {
    $("#transParrent").css("display", "none");
    $('#wholeCont').css('display', 'none');
    $('#viheclesPage').css('display', 'block');
    $('.header-bg-img').css('display', 'none');
});

$("#Contact").click(function () {
    $("#transParrent").css("display", "block");
    $('#wholeCont').css('display', 'block');
    $('#viheclesPage').css('display', 'none');
    $('.header-bg-img').css('display', 'block');
});