function swapTheme() {
  var changeScreen = document.getElementById("app");
  var changeButton = document.getElementById("swap");

  if (
    changeScreen.className == "day" &&
    changeButton.className == "button_day"
  ) {
    changeScreen.className = "night";
    changeButton.className = "button_night";
  } else {
    changeScreen.className = "day";
    changeButton.className = "button_day";
  }
}
