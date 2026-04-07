document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Add your profile URL here when you are ready.");
  });
});
