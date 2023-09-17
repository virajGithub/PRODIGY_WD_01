// Function to add scroll event listener
window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
});


// JavaScript code to open a new page when the button is clicked
document.getElementById("myButton").addEventListener("click", function() {
    // Replace 'new-page.html' with the URL of the page you want to open
    window.location.href = "knowmore.html";
});

// JavaScript code to open a new page when the button is clicked
document.getElementById("myButton1").addEventListener("click", function() {
    // Replace 'new-page.html' with the URL of the page you want to open
    window.location.href = "booktic.html";
});