const colorPicker = document.getElementById("favcolor-1");
const colorPickerSub = document.getElementById("favcolor-2");
const colorDisplay = document.getElementById("color-value-1");
const colorDisplaySub = document.getElementById("color-value-2");

colorPicker.addEventListener("input", function () {
  colorDisplay.value = colorPicker.value;
});

colorPickerSub.addEventListener("input", function () {
  colorDisplaySub.value = colorPickerSub.value;
});

colorDisplay.addEventListener("input", function () {
  const value = colorDisplay.value;
  colorPicker.value = value;
});

colorDisplaySub.addEventListener("input", function () {
  const value = colorDisplaySub.value;
  colorPickerSub.value = value;
});

const rangeSlider = document.getElementById("myRange");
const sliderValue = document.getElementById("slider-val");

rangeSlider.addEventListener("input", function () {
  const value = rangeSlider.value;
  sliderValue.textContent = value;
});
