
# Link Shortener Web Application

A client-side link shortener web application built using HTML, CSS, and JavaScript. This application allows users to shorten long URLs into concise and shareable links, with additional features like custom aliases, QR code generation, dark mode, and a list of recently shortened URLs.

## Features

- **Shorten URLs**: Convert long URLs into shorter, more manageable links.
- **Custom Aliases**: Users can provide custom aliases for their shortened URLs.
- **QR Code Generation**: Automatically generate a QR code for each shortened URL.
- **Copy to Clipboard**: Easily copy the shortened URL to your clipboard.
- **Recent Links**: View a list of recently shortened URLs within the current session.
- **Dark Mode**: Toggle between light and dark modes for better accessibility.

## Project Structure

The project has the following file structure:

link-shortener/
├── index.html # The main HTML file for the application 
├── style.css # The CSS file for styling the application 
└── script.js # The JavaScript file for handling the app's logic


### 1. `index.html`

The main HTML file for the application. It contains the structure of the web page, including the form for inputting URLs, the display area for results, and the section for recent links.

### 2. `style.css`

The CSS file for styling the application. It defines the visual appearance of the application, including layout, colors, and responsive design elements.

### 3. `script.js`

The JavaScript file for handling the app's logic. It includes functionality for shortening URLs, generating QR codes, copying URLs to the clipboard, managing recent links, and toggling dark mode.

## Installation and Usage

### Open the Application
Open the index.html file in your web browser to start using the application.

### Using the Application
Enter a URL: Type the long URL you want to shorten in the input field.

Custom Alias (Optional): Provide a custom alias for the shortened URL (optional).

Shorten URL: Click the "Shorten URL" button to generate a shortened link and a corresponding QR code.

Copy to Clipboard: Click "Copy to Clipboard" to easily copy the shortened URL.

View Recent Links: Check the "Recent Links" section to see the URLs you recently shortened.

Toggle Dark Mode: Use the "Toggle Dark Mode" button to switch between light and dark themes.


## Features in Detail

1. URL Shortening
Default Behavior: If no custom alias is provided, the app generates a random 6-character string to append to the base URL.
Custom Aliases: Users can provide a custom alias for their shortened URLs. If the alias is already in use (within the session), the app will alert the user to choose another one.

3. QR Code Generation
The application uses an external API to generate a QR code for the shortened URL. The QR code can be scanned to access the shortened URL directly.

5. Copy to Clipboard
The application includes a "Copy to Clipboard" button that allows users to copy the shortened URL directly to their clipboard for easy sharing.

7. Recent Links
The application stores recently shortened URLs in an array and displays them in the "Recent Links" section.

9. Dark Mode
Users can toggle between light and dark modes for better readability in different environments. The dark mode feature is implemented with a simple toggle button.

# License
This project is licensed under the MIT License. You are free to use, modify, and distribute this code.

# Contributing
Contributions are welcome! To contribute:

Fork the repository.

Create a new branch (git checkout -b feature-branch).

Commit your changes (git commit -m 'Add new feature').

Push to the branch (git push origin feature-branch).

Open a pull request.

## Contact
If you have any questions or suggestions, feel free to reach out:

Email: deepakdpk0704@gmail.com

GitHub: deepakkumar9546

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/link-shortener.git
cd link-shortener
