const modeSwitch = document.getElementById("modeSwitch");
const htmlElement = document.documentElement;
const savedMode = localStorage.getItem("mode");
if (savedMode === "dark") {
  modeSwitch.checked = true;
  htmlElement.setAttribute("data-bs-theme", "dark");
}
modeSwitch.addEventListener("change", function () {
  if (modeSwitch.checked) {
    htmlElement.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("mode", "dark");
  } else {
    htmlElement.setAttribute("data-bs-theme", "light");
    localStorage.setItem("mode", "light");
  }
});