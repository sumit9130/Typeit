const quoteSection = document.getElementById('quote');
const userInput = document.getElementById('quote-input');

// Define the API endpoint
const quoteApiUrl = "https://api.quotable.io/random?minLength=150&maxLength=200";

async function renderNewQuote() {
  try {
    // Fetch data from the API
    const response = await fetch(quoteApiUrl);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();

    // Update the quote section with the new quote
    const quote = data.content;
    quoteSection.innerHTML = '';

    // Display the quote, letter by letter
    quote.split('').forEach((char) => {
      const span = document.createElement('span');
      span.innerText = char;
      quoteSection.appendChild(span);
    });
  } catch (error) {
    // Handle errors by displaying a fallback message
    console.error("Error fetching the quote:", error);
    quoteSection.innerHTML = "Error loading quote. Please try again.";
  }
}

// Call the function to load a new quote on page load
renderNewQuote();