document.getElementById("menu-button").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal").style.width = "100%";
});

document.getElementById("close-button").addEventListener("click", function () {
  document.getElementById("modal").style.width = "0";
  document.getElementById("modal").style.display = "none";
});
