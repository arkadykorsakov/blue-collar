"use strict";

// ПЕРЕМЕЩЕНИЕ ЭЛЕМЕНТОВ
window.addEventListener("resize", function () {
  adaptive_function();
});

function adaptive_header(w, h) {
  const header = document.querySelector(".header");
  const headerUp = document.querySelector(".header__up");
  const menu = document.querySelector(".menu");
  const middleHeaderContainer = document.querySelector(
    ".middle-header__container"
  );
  const middleHeaderContacts = document.querySelector(
    ".middle-header__contacts"
  );

  const downHeaderBtn = document.querySelector(".down-header__btn");
  const downHeaderContainer = document.querySelector(".down-header__container");

  if (w < 992) {
    menu.append(middleHeaderContacts);
    menu.append(downHeaderBtn);
    menu.append(headerUp);
  } else {
    middleHeaderContainer.append(middleHeaderContacts);
    downHeaderContainer.append(downHeaderBtn);
    header.prepend(headerUp);
  }
}

function adaptive_function() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  adaptive_header(w, h);
}

adaptive_function();

// АДАПТИВНОЕ МЕНЮ
const iconMenu = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");

iconMenu.addEventListener("click", function () {
  menu.classList.toggle("_active");
  document.body.classList.toggle("_close");
  iconMenu.classList.toggle("_active");
});

// ТАБЫ
const tabs = document.querySelectorAll("[data-tab]");
const tabsButtons = document.querySelectorAll("[data-open-tab]");

tabs[0].classList.add("_active");
tabsButtons[0].classList.add("_active");

window.addEventListener("click", function (e) {
  if (e.target.closest("[data-open-tab]")) {
    const openTab = e.target.closest("[data-open-tab]").dataset.openTab;
    tabs.forEach((tab) => {
      tab.classList.remove("_active");
      if (tab.dataset.tab === openTab) {
        tab.classList.add("_active");
      }
    });
    tabsButtons.forEach((btn) => {
      btn.classList.remove("_active");
      if (btn.dataset.openTab === openTab) {
        btn.classList.add("_active");
      }
    });
  }
});

// СЛАЙДЕР
const slides = document.querySelectorAll(".slider-customers__item");
let activeIndexSlide = 0;

window.addEventListener("click", function (event) {
  if (event.target.closest("[data-slider-arrow]")) {
    const arrow = event.target.closest("[data-slider-arrow]").dataset
      .sliderArrow;
    if (arrow === "prev") {
      deleteActive();
      if (activeIndexSlide > 0) {
        showSlide(slides[--activeIndexSlide]);
      } else {
        showSlide(slides[slides.length - 1]);
        activeIndexSlide = slides.length - 1;
      }
    } else if (arrow === "next") {
      deleteActive();
      if (activeIndexSlide < slides.length - 1) {
        showSlide(slides[++activeIndexSlide]);
      } else {
        showSlide(slides[0]);
        activeIndexSlide = 0;
      }
    }
  }
});

function deleteActive() {
  slides.forEach((slide) => {
    slide.classList.remove("_active");
  });
}

function showSlide(slide) {
  slide.classList.add("_active");
}

// СПОЙЛЕР
window.addEventListener("click", function (event) {
  const spoiler = event.target.closest(".item-footer__title");
  spoiler.classList.toggle("_active");
});
