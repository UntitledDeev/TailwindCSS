const allCustomTab = document.querySelectorAll(".custom-tab-link");
const allCustomTabContent = document.querySelectorAll(".custom-tab-content");

allCustomTab.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    allCustomTab.forEach((tab) => {
      tab.classList.remove("active");
    });

    allCustomTabContent.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    allCustomTab[index].classList.add("active");
    allCustomTabContent[index].classList.add("active");
  });
});
