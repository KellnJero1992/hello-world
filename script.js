const button = document.getElementById("new-quote-btn");
const quoteDiv = document.getElementById("quote-output");
const authorDiv = document.getElementById("author-output");
const quotes = [
  {
    quote: "If you talk to a man in a language he understands, that goes to his head. If you talk to him in his own language, that goes to his heart.",
    author: "— Nelson Mandela"
  },
  {
    quote: "Learning another language is not only learning different words for the same things, but learning another way to think about things.",
    author: "— Flora Lewis"
  },
  {
    quote: "Language is the road map of a culture. It tells you where its people come from and where they are going.",
    author: "— Rita Mae Brown"
  },
  {
    quote: "Language shapes the way we think, and determines what we can think about.",
    author: "— Benjamin Lee Whorf"
  },
  {
    quote: "You live a new life for every new language you speak. If you know only one language, you live only once.",
    author: "— Czech Proverb"
  },
  {
    quote: "The most intimate temper of a people, its deepest soul, is above all in its language. ",
    author: "— Jules Michelet"
  }
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
