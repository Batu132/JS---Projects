const quoteGenerator = document.querySelector(".quote");
const nameGenerator = document.querySelector(".name");
const buttonClick = document.querySelector("button");
buttonClick.style.cursor = "pointer";

buttonClick.addEventListener("click", (event) => {
  const randomNumber = Math.floor(Math.random() * 5 + 1); // Random numbers between 1 and 5
  switch (randomNumber) {
    case 1:
      quoteGenerator.textContent =
        "The greatest glory in living lies not in never falling, but in rising every time we fall.";
      nameGenerator.textContent = "-Nelson Mandela";
      break;
    case 2:
      quoteGenerator.textContent =
        "The way to get started is to quit talking and begin doing.";
      nameGenerator.textContent = "-Walt Disney";
      break;
    case 3:
      quoteGenerator.textContent =
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.";
      nameGenerator.textContent = "-Steve Jobs";
      break;
    case 4:
      quoteGenerator.textContent =
        "The future belongs to those who believe in the beauty of their dreams.";
      nameGenerator.textContent = "-Eleanor Roosevelt";
      break;
    case 5:
      quoteGenerator.textContent =
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success";
      nameGenerator.textContent = "-James Cameron";
      break;
  }
});
