const cont = document.getElementById("container")
const btn = document.getElementById("icon");
btn.onclick = function () {
  if (cont.style.display !== "none") {
    cont.style.display = "none";
  } else {
    cont.style.display = "block";
  }
};