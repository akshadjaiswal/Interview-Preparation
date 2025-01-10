const incrementButton = document.getElementById("button");
const text = document.getElementById("number");

let counter = 0;
incrementButton.addEventListener("click", () => {
  counter++;
  text.textContent = counter;
});
