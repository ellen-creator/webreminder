const quotes = [
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
      author: "Steve Jobs"
    },
    {
      quote: "Trust the process. Your time is coming. Just do the work and the results will handle themselves.",
      author: "Tony Gaskins"
    },
    {
      quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "Don't be afraid to give up the good to go for the great.",
      author: "John D. Rockefeller"
    },
    {
      quote: "The road to success and the road to failure are almost exactly the same. The difference is persistence.",
      author: "Colin Powell"
    },
    {
      quote: "Your path is your own unique journey. Comparison is the thief of joy and progress.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      author: "Christian D. Larson"
    },
    {
      quote: "Direction is more important than speed. Many are going nowhere fast.",
      author: "Unknown"
    },
    {
      quote: "You are exactly where you need to be. Every step is a lesson, not a mistake.",
      author: "Anonymous"
    }
  ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
