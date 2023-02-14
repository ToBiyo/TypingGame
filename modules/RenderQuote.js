export const renderQuote = (data, target) => {
  target.innerHTML = " ";

  let randomQuote = data;
  const quote = document.createElement("p");
  quote.classList = "quote";
  quote.innerHTML = randomQuote;
  target.append(quote);
};
