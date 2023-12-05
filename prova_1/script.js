function dropd() {
  let dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

function openClose() {
  let openPath = document.getElementById("open-path");
  let close = document.getElementById("close");
  if (openPath.getAttribute("d") === "M4 6h16M4 12h16M4 18h16") {
    openPath.setAttribute("d", "M6 18L18 6M6 6l12 12");
    close.classList.remove("hidden");
  } else {
    openPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
    close.classList.add("hidden");
  }
}
