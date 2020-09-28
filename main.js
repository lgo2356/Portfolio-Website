"use strict";

// 테스트
const splashPage = document.querySelector("#splash");
const greetingMsg = document.querySelector(".splash__greeting");
const greetingMsg02 = document.querySelector(".splash__greeting-2");
const mainContents = document.querySelector(".main__container");

// 소개글
// 관심 분야에 대한 높은 몰입도
const firstSubtitle = document.querySelector(".subtitle__first").childNodes[0]
  .innerText;

// Splash
splashPageAnimation();

// Navbar
// Navbar 상단에 있을 때 투명하게 바꾸기
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Navbar 메뉴 클릭시 해당 영역으로 스크롤 하기
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }

  navbarMenu.classList.remove("open");

  scrollIntoView(link);
});

// Navbar 모바일 화면 토글 버튼 이벤트 처리
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Home
// Handle click on "contact me" button on home
const contactButton = document.querySelector(".home__contact");
contactButton.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// 스크롤을 내릴 때 Home 화면 점점 투명화시키기
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
console.log(homeHeight);
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow-up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Handle click on the "arrow-up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// Skills
const skillJava = document.querySelector(".skill__java");
const skillKotlin = document.querySelector(".skill__kotlin");
const skillHTML = document.querySelector(".skill__html");
const skillCSS = document.querySelector(".skill__css");
const skillJS = document.querySelector(".skill__js");

document.addEventListener("scroll", () => {
  if (window.scrollY >= 850 && window.scrollY <= 1950) {
    skillJava.childNodes[1].childNodes[1].style.height = "99%";
    skillKotlin.childNodes[1].childNodes[1].style.height = "99%";
    skillHTML.childNodes[1].childNodes[1].style.height = "90%";
    skillCSS.childNodes[1].childNodes[1].style.height = "80%";
    skillJS.childNodes[1].childNodes[1].style.height = "70%";
  }

  // if (window.scrollY < 800 || window.scrollY > 1950) {
  //   skillJava.childNodes[1].childNodes[1].style.height = "0%";
  //   skillKotlin.childNodes[1].childNodes[1].style.height = "0%";
  //   skillHTML.childNodes[1].childNodes[1].style.height = "0%";
  //   skillCSS.childNodes[1].childNodes[1].style.height = "0%";
  //   skillJS.childNodes[1].childNodes[1].style.height = "0%";
  // }
});

skillJava.addEventListener("click", () => {
  skillJava.childNodes[1].childNodes[3].style.height = "99%";
});

// Projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;

  if (filter == null) {
    return;
  }

  // Remove selection from the provious item and select
  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");

  const target =
    event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode;
  target.classList.add("selected");

  projectContainer.classList.add("anime-out");

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });

    projectContainer.classList.remove("anime-out");
  }, 300);
});

function splashPageAnimation() {
  setTimeout(() => {
    greetingMsg.style.opacity = 1;

    setTimeout(() => {
      greetingMsg02.style.opacity = 1;

      setTimeout(() => {
        const splashPageHeight = splashPage.getBoundingClientRect().height;
        // splashPage.style.transform = "translateY(-" + splashPageHeight + "px)";
        splashPage.style.opacity = 0;
        mainContents.style.position = "relative";

        setTimeout(() => {
          splashPage.style.display = "none";
        }, 600);
      }, 1300);
    }, 1000);
  }, 100);
}

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
