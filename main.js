const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const portfolio = document.querySelector('#portfolio');
const contact = document.querySelector('#contact');
const title = document.querySelector('.title');
//Nav active
const active = document.querySelectorAll('.nav a');
const activeIcon = document.querySelectorAll('.nav a .fa');
const colorBlueDark = "rgb(84, 104, 160)";
const colorBlue = "rgb(144, 208, 228)";
active[0].style.color = colorBlue;
activeIcon[0].style.color = colorBlue;

const titles = {
    "about": ` About me`,
    "skills": `My skills`,
    "portfolio": ` My portfolio`,
    "contact": `Get In Touch`
}
title.innerHTML = titles["about"];

function aboutMe() {
    about.style.display = "block";
    skills.style.display = "none";
    portfolio.style.display = "none";
    contact.style.display = "none";
    title.innerHTML = titles["about"];
    active[0].style.color = colorBlue
    active[1].style.color = colorBlueDark;
    active[2].style.color = colorBlueDark;
    active[3].style.color = colorBlueDark;
    //Icons link
    activeIcon[0].style.color = colorBlue;
    activeIcon[1].style.color = colorBlueDark;
    activeIcon[2].style.color = colorBlueDark;
    activeIcon[3].style.color = colorBlueDark;
    document.title = "About me";
}

function mySkills() {
    about.style.display = "none";
    skills.style.display = "block";
    portfolio.style.display = "none";
    contact.style.display = "none";
    title.innerHTML = titles["skills"];
    active[1].style.color = colorBlue;
    active[0].style.color = colorBlueDark;
    active[2].style.color = colorBlueDark;
    active[3].style.color = colorBlueDark;
    //Icons link
    activeIcon[0].style.color = colorBlueDark;
    activeIcon[1].style.color = colorBlue;
    activeIcon[2].style.color = colorBlueDark;
    activeIcon[3].style.color = colorBlueDark;
    document.title = "Skills";
}

function myPortfolio() {
    about.style.display = "none";
    skills.style.display = "none";
    portfolio.style.display = "block";
    contact.style.display = "none";
    title.innerHTML = titles["portfolio"];
    active[2].style.color = colorBlue;
    active[0].style.color = colorBlueDark;
    active[1].style.color = colorBlueDark;
    active[3].style.color = colorBlueDark;
    //Icons link
    activeIcon[0].style.color = colorBlueDark;
    activeIcon[1].style.color = colorBlueDark;
    activeIcon[2].style.color = colorBlue;
    activeIcon[3].style.color = colorBlueDark;
    document.title = "Portfolio";
}

function myContact() {
    about.style.display = "none";
    skills.style.display = "none";
    portfolio.style.display = "none";
    contact.style.display = "block";
    title.innerHTML = titles["contact"];
    active[3].style.color = colorBlue;
    active[0].style.color = colorBlueDark;
    active[1].style.color = colorBlueDark;
    active[2].style.color = colorBlueDark;
    //Icons link
    activeIcon[0].style.color = colorBlueDark;
    activeIcon[1].style.color = colorBlueDark;
    activeIcon[2].style.color = colorBlueDark;
    activeIcon[3].style.color = colorBlue;
    document.title = "Contact";
}