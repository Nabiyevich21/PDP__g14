document.querySelector("#langEl").addEventListener("change", function () {
  const language = this.value;

  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((element) => {
    element.innerHTML = lang[language][element.getAttribute("data-lang")];
  });
});
