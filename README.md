# Quotely - Your Daily Dose of Motivation

Quotely is a React-based web application that provides users with daily motivational quotes. It features a clean and modern design with a dark/light theme toggle, language selection (English, German, French), and the ability to save favorite quotes.

## Features

* **Daily Quotes:** Fetches and displays random motivational quotes from an external API.
* **Theme Selection:** Allows users to switch between light and dark themes.
* **Language Selection:** Supports English, German, and French languages for the application's interface.
* **Favorite Quotes:** Enables users to save their favorite quotes for later viewing.
* **Share Functionality:** Provides a button to share the displayed quote on Twitter.
* **Regenerate Quote:** Allows users to fetch a new random quote.
* **Clean and Responsive Design:** Offers a user-friendly experience on various screen sizes.

## Technologies Used

* **React:** For building the user interface.
* **Tailwind CSS:** For styling the application.
* **Vite:** For fast development and build process.
* **Flask (Backend):** For serving the quotes API.
* **icons8:** for the settings icon.

## Getting Started

### Prerequisites

* Node.js and npm (or yarn) installed.
* Python and pip installed (for the Flask backend).

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [repository-url]
    cd [project-directory]
    ```

2.  **Install frontend dependencies:**

    ```bash
    cd [project-directory]
    npm install
    ```

3.  **Install backend dependencies:**

    ```bash
    cd [project-directory]
    pip install flask requests flask-cors
    ```

4.  **Run the Flask backend server:**

    ```bash
    cd [project-directory]
    python app.py
    ```

    (This should start the Flask server on `http://localhost:3001`).

5.  **Run the React development server:**

    Open a new terminal window and run:

    ```bash
    cd [project-directory]
    npm run dev
    ```

    (This should start the React development server on `http://localhost:5173` or a similar port).

6.  **Open the application in your browser:**

    Go to `http://localhost:5173` (or the port displayed in your terminal).

## Project Structure

```
your-project/
├── src/
│   ├── components/
│   │   ├── FavoriteQuotes.jsx
│   │   ├── QuoteActions.jsx
│   │   ├── QuoteCard.jsx
│   │   ├── ThemeSelector.jsx
│   │   ├── SettingsButton.jsx
│   │   ├── LanguageSelector.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   ├── utils/
│   │   ├── fetchQuote.js
│   ├── LanguageContext.jsx
│   ├── translations.json
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── public/
│   ├── icons8-settings-32.png
│   ├── index.html
├── app.py (Flask backend)
├── package.json
├── tailwind.config.js
├── vite.config.js
├── README.md
```

## Customization

* **Quotes API:** You can replace the external quotes API with your own by modifying the `fetchQuote.js` file and the Flask backend.
* **Translations:** Add more languages or modify existing translations in the `translations.json` file.
* **Styling:** Customize the application's appearance by modifying the Tailwind CSS classes in the React components or by editing the `index.css` file.
* **Icons:** Change the settings icon by replacing the `icons8-settings-32.png` file in the `public` directory or by using a different icon library.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
```

