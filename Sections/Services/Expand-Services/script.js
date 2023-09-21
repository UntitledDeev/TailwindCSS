const customBox = document.querySelectorAll(".custom-box");
const customBoxInner = document.querySelectorAll(".custom-box-inner");

customBox.forEach((singleBox) => {
  singleBox.addEventListener("click", () => {
    customBoxInner.forEach((single) => {
      single.classList.remove("active");
    });
    const customBoxSibling = singleBox.nextElementSibling;
    customBoxSibling.classList.add("active");
  });
});
