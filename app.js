const inputFahrenheight = document.getElementById("inputKG");

let celsiusValue = document.querySelector("#celsiusValue");

let button = document.querySelector("button");

//add a event Listener for when Calculate button is clicked

button.addEventListener("click", () => {
  celsiusValue.textContent = (inputFahrenheight.value - 32) / 1.8;
});
