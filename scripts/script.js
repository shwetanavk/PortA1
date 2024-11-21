// Dynamically include header and footer
fetch("./html/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  })
  .catch((error) => {
    console.log("Error loading header: ", error);
  });

fetch("./html/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch((error) => {
    console.log("Error loading footer: ", error);
  });

// Function to load page content dynamically
function loadContent(page) {
  fetch(`html/${page}-content.html`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    });
}

// Default to the home page
loadContent("home");

// Event listeners for navigation
document.addEventListener("click", (event) => {
  if (event.target.matches("[data-page]")) {
    const page = event.target.getAttribute("data-page");
    loadContent(page);
    event.preventDefault();
  }
});
