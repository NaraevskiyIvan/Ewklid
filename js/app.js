document.addEventListener("DOMContentLoaded", function (e) {
  // Slider
  const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Work-tabs

  document.querySelectorAll(".work__btn").forEach(function (e) {
    e.addEventListener("click", function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll(".tab-content").forEach(function (e) {
        e.classList.remove("tab-content--active");
        document
          .querySelector(`[data-target= '${tab}']`)
          .classList.add("tab-content--active");
      });
    });

    e.addEventListener("click", function (e) {
      const tabActive = e.currentTarget.dataset.active;
      document.querySelectorAll(".work__btn").forEach(function (e) {
        e.classList.remove("work__btn--active");
        document
          .querySelector(`[data-path= '${tabActive}']`)
          .classList.add("work__btn--active");
      });
    });
  });

  // Accordion
  $(function () {
    $("#accordion").accordion({
      collapsible: true,
      heightStyle: "content",
    });
  });

  // Burger
  const burgerBtn = document.querySelector(".burger");
  const menuClose = document.querySelector(".menu-close");
  const nav = document.querySelector(".nav");

  burgerBtn.addEventListener("click", () => {
    nav.classList.add("burger-active");
  });

  menuClose.addEventListener("click", () => {
    nav.classList.remove("burger-active");
  });

  // Search
  const search = document.querySelector(".search");
  const searchForm = document.querySelector(".search-form");
  const searchFormSend = document.querySelector("search-form-send");
  const searchFormClose = document.querySelector(".search-form__close");

  search.addEventListener("click", () => {
    searchForm.classList.add("form-active");
  });

  searchFormClose.addEventListener("click", () => {
    searchForm.classList.remove("form-active");
  });

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
  });
});
