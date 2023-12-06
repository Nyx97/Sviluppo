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
  if (openPath.getAttribute("d") === "M4 6h16M4 12h16M4 18h16") {
    openPath.setAttribute("d", "M6 18L18 6M6 6l12 12");
    menu.classList.remove("hidden");
  } else {
    openPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
    menu.classList.add("hidden");
  }
}

function toggleDropdown() {
  var dropdownMenu = document.getElementById("dropdownMenu");
  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
}
