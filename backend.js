const colorPicker = document.getElementById("favcolor-1");
const colorPickerSub = document.getElementById("favcolor-2");
const colorDisplay = document.getElementById("color-value-1");
const colorDisplaySub = document.getElementById("color-value-2");

colorPicker.addEventListener("input", function () {
  colorDisplay.textContent = colorPicker.value;
});

colorPickerSub.addEventListener("input", function () {
  colorDisplaySub.textContent = colorPickerSub.value;
});

// Slider functionality
const rangeSlider = document.getElementById("myRange");
const sliderValue = document.getElementById("slider-val");

rangeSlider.addEventListener("input", function () {
  const value = rangeSlider.value;
  sliderValue.textContent = value;
});
