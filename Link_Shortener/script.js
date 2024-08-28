 // script.js

// Array to store recent links
let recentLinks = [];

// Function to generate a random short URL segment
function generateShortURL() {
    return Math.random().toString(36).substring(2, 8);
}

// Function to add a new shortened URL to the recent links list
function addToRecentLinks(shortURL, alias) {
    recentLinks.push({ shortURL, alias });
    updateRecentLinksList();
}

// Function to update the list of recent links displayed on the page
function updateRecentLinksList() {
    const linksList = document.getElementById('linksList');
    linksList.innerHTML = '';

    recentLinks.forEach(link => {
        const listItem = document.createElement('li');
        const linkElement = document.createElement('a');
        linkElement.href = link.shortURL;
        linkElement.target = "_blank";
        linkElement.innerText = link.shortURL;

        listItem.appendChild(linkElement);
        linksList.appendChild(listItem);
    });
}

// Function to handle form submission and URL shortening
document.getElementById('shortenForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const longURL = document.getElementById('longURL').value;
    const customAlias = document.getElementById('customAlias').value;
    let shortURL;

    // Check if the custom alias is already in use
    if (customAlias && recentLinks.some(link => link.alias === customAlias)) {
        alert('Alias already in use. Please choose another one.');
        return;
    }

    // Generate the short URL
    if (customAlias) {
        shortURL = `${window.location.href}${customAlias}`;
    } else {
        shortURL = `${window.location.href}${generateShortURL()}`;
    }

    // Display the shortened URL and QR code
    document.getElementById('result').innerHTML = `
        <p>Shortened URL: <a href="${shortURL}" target="_blank">${shortURL}</a></p>
        <p><img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${shortURL}" alt="QR Code"></p>
        <button id="copyButton">Copy to Clipboard</button>
    `;

    // Add the shortened URL to recent links
    addToRecentLinks(shortURL, customAlias || shortURL.split('/').pop());

    // Handle copy to clipboard functionality
    document.getElementById('copyButton').addEventListener('click', function () {
        navigator.clipboard.writeText(shortURL).then(() => {
            alert('Shortened URL copied to clipboard!');
        });
    });
});

// Function to toggle dark mode
document.getElementById('toggleDarkMode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
