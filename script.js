const button = document.getElementById("new-quote-btn");
const quoteDiv = document.getElementById("quote-output");
const authorDiv = document.getElementById("author-output");
const quotes = [
  {
    quote: "A different language is a different vision of life.",
    author: "— Federico Fellini"
  },
  {
    quote: "The limits of my language mean the limits of my world.",
    author: "— Ludwig Wittgenstein"
  },
  {
    quote: "Language is the road map of a culture. It tells you where its people come from and where they are going.",
    author: "— Rita Mae Brown"
  },
  {
    quote: "He who knows no foreign languages knows nothing of his own.",
    author: "— Confucius"
  },
  {
    quote: "If you talk to a man in a language he understands, that goes to his head. If you talk to him in his own language, that goes to his heart.",
    author: "— Nelson Mandela"
  },
  {
    quote: "Learning another language is not only learning different words for the same things, but learning another way to think about things.",
    author: "— Flora Lewis"
  },
  {
    quote: "Knowledge of languages is the doorway to wisdom.",
    author: "— Roger Bacon"
  },
  {
    quote: "Language is the blood of the soul into which thoughts run and out of which they grow.",
    author: "— Oliver Wendell Holmes"
  },
  {
    quote: "Language is not a genetic gift, it is a social gift. Learning a new language is becoming a member of the club – the community of speakers of that language.",
    author: "— Nelson Mandela"
  },
  {
    quote: "A special kind of beauty exists which is born in language, of language, and for language.",
    author: "— Gaston Bachelard"
  },
]
button.addEventListener("click", function() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];


  if (quoteDiv.innerText !== randomQuote.quote) {
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  } else {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  }
});
