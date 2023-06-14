# Dark/Light Mode Example

This code provides a simple implementation of a dark/light mode toggle using JavaScript and Bootstrap. When the user toggles the switch, the page's theme changes between dark and light modes. The user's preference is saved using the browser's local storage, so the selected mode persists even after refreshing the page.

## How it Works

The code consists of an HTML file and a JavaScript script. Here's how it works:

1. HTML Structure:

   - The switch toggle is created using Bootstrap's form-check component.
   - The switch input element has an ID of "modeSwitch" to identify it in JavaScript.
   - The label displays the text "Dark Mode" next to the switch.

2. JavaScript Logic:
   - The script first retrieves the required HTML elements using their IDs.
   - It then checks the value of the "mode" stored in the browser's local storage.
   - If the saved mode is "dark", the switch is checked and the page's theme is set to "dark" using the `setAttribute` method.
   - When the user toggles the switch, an event listener is triggered.
   - If the switch is checked, the page's theme is set to "dark" and the "mode" is saved as "dark" in the local storage.
   - If the switch is not checked, the page's theme is set to "light" and the "mode" is saved as "light" in the local storage.

## Usage

To use this code, follow these steps:

1. Include the necessary CSS and JavaScript files:

   - Add the Bootstrap CSS file to your HTML file.
   - Include the provided JavaScript code in your HTML file, preferably just before the closing </body> tag.

2. Add the HTML structure:

   - Place the provided HTML code for the switch toggle where you want it to appear on your page.

3. Test the Dark/Light Mode functionality:
   - Open the HTML file in a web browser.
   - Toggle the switch to see the theme change between dark and light modes.
   - Refresh the page and verify that the selected mode persists.

That's it! You now have a simple implementation of a Dark/Light Mode toggle using JavaScript and Bootstrap. Feel free to modify the code as needed to suit your project's requirements.
