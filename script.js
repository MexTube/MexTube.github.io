// Function to load a website into the iframe
function loadWebsite(url) {
    const iframe = document.getElementById('website-iframe');
    iframe.src = url;
}

// Load the initial website (you can change this URL)
loadWebsite('Home.html');

// Remove the search functionality
// You can keep the code below if you no longer need the search functionality

/*
function searchWebsites() {
    const searchInput = document.querySelector('.search-bar input');
    const searchTerm = searchInput.value.toLowerCase();
    
    // Perform your search logic here, e.g., filter thumbnails based on the search term
    const thumbnails = document.querySelectorAll('.thumbnails .thumbnail');
    
    thumbnails.forEach(thumbnail => {
        const title = thumbnail.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            thumbnail.style.display = 'block';
        } else {
            thumbnail.style.display = 'none';
        }
    });
}

// Add an event listener for the search input
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', searchWebsites);
*/

// You can keep the toggleOptions functions if they are still needed

function toggleOptions() {
    var content = document.getElementById('optionsContent');
    content.style.display = 'block';
}

function  hidetoggleOptions() {
    var content = document.getElementById('optionsContent');
    content.style.display = 'none';
}





// Function to handle login button click
const handleLoginButtonClick = () => {
    // Perform login
    signIn();
    // Close the page
    window.close();
}

// Function to handle signup button click
const handleSignupButtonClick = () => {
    // Perform signup
    signUp();
    // Close the page
    window.close();
}

// Event listeners for login and signup buttons
document.getElementById("loginButton").addEventListener("click", handleLoginButtonClick);
document.getElementById("signupButton").addEventListener("click", handleSignupButtonClick);
