import translations from '/src/components/translations.json';

async function fetchQuote() {
    try {
      const response = await fetch('http://localhost:3001/quote'); // Your Flask server
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data; // The Flask server now returns the quote text directly.
    } catch (error) {
      console.error('Error fetching quote:', error);
      return translations.Home.failedFetch;
    }
  }
  
  export default fetchQuote;