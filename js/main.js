const contentInner = document.querySelector(".content");
const progress = document.querySelector(".progress");

const menu = document.querySelector(".menu");
const inside = document.querySelectorAll(".menu-one");
const insideChild = document.querySelectorAll(".menu-inside");
const header = document.querySelector(".header");
const sideNav = document.querySelector(".side-nav");
const sideNavItems = document.querySelectorAll(".side-nav a");
const content = document.querySelector(".content");
const textImage = document.querySelector(".text-image");
const body = document.querySelector("body");

inside[0].addEventListener("click", () => {
  sideNav.style.left = "0px";
});

inside[1].addEventListener("click", () => {
  sideNav.style.left = "-200px";
});

sideNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    sideNav.style.left = "-200px";
  });
});

const loadDownload = document.querySelectorAll(".btn-load");

document.getElementById("download").addEventListener("click", () => {
  loadDownload[0].style.visibility = "visible";
  setTimeout(() => {
    loadDownload[0].style.visibility = "hidden";
    download();
  }, 1500);
});

function download() {
  const pdfUrl = "Joseph_malete(Updated_CV).pdf";
  const anchor = document.createElement("a");

  anchor.href = pdfUrl;
  anchor.download = "Joseph Malete Updated CV.pdf";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

document.getElementById("view").addEventListener("click", () => {
  loadDownload[1].style.visibility = "visible";
  setTimeout(() => {
    loadDownload[1].style.visibility = "hidden";
    view();
  }, 2500);
});

function view() {
  const pdfUrl = "Joseph_malete(Updated_CV).pdf";
  window.open(pdfUrl, "_blank");
}
