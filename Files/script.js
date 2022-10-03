function color_change() {
  const heart = document.getElementsByClassName("fa-solid")[0];
  setInterval(function () {
    const array = ["red", "yellow", "blue", "green", "black", "white"];
    var random = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementsByClassName("fa-solid")[0].style.color = "#" + random;
  }, 2000);
}

const label = document.querySelector("label");
function onEnter() {
  label.classList.add("active");
}
function onLeave() {
  label.classList.remove("active");
}
label.addEventListener("dragenter", onEnter);
label.addEventListener("dragend", onLeave);
label.addEventListener("dragleave", onLeave);
label.addEventListener("dragexit", onLeave);

const input = document.querySelector("input");
input.addEventListener("change", (event) => {
  if (input.files.length > 0) {
    // A file is selected
  }
});
