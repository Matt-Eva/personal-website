const readMoreButtons = document.getElementsByClassName("read-more");

for (const button of readMoreButtons) {
  button.addEventListener("click", (e) => {
    const nextSibling = e.target.nextElementSibling;
    nextSibling.classList.toggle("hidden-content");
    if (e.target.textContent === "read more") {
      e.target.textContent = "hide";
    } else if (e.target.textContent === "hide") {
      e.target.textContent = "read more";
    }
  });
}
