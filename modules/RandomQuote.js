export const getRandomQuote = async () => {
  const key = "g06NiuZVBN0RpqNvZ9XmSQ==68VMX094w9ZJ0uAa";
  const url = `https://api.api-ninjas.com/v1/quotes?category=movies`;

  const options = {
    headers: { "X-Api-Key": key },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  return result[0].quote;
};
