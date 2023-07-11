const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const portfolio = document.querySelector('#portfolio');
const contact = document.querySelector('#contact');
const title = document.querySelector('.title');
//Nav active
const active = document.querySelectorAll('.nav a');
const activeIcon = document.querySelectorAll('.nav a .fa');
const colorBlueDark = "rgb(84, 104, 160)";
const colorBlue = "rgb(93, 196, 150)";
//Nav position 1
active[0].style.borderBottom = "5px solid rgb(84, 104, 160)";
active[0].style.height = "40px";
active[0].style.paddingTop = "10px";
//Nav position 2
active[1].style.height = "40px";
active[1].style.paddingTop = "10px";
//Nav position 3
active[2].style.height = "40px";
active[2].style.paddingTop = "10px";
//Nav position 4
active[3].style.height = "40px";
active[3].style.paddingTop = "10px";


const titles = {
    "about": ` About me`,
    "skills": `My skills`,
    "portfolio": ` Projects`,
    "contact": `Get In Touch`
}
title.innerHTML = titles["about"];

function aboutMe() {
    about.style.display = "block";
    skills.style.display = "none";
    portfolio.style.display = "none";
    contact.style.display = "none";
    title.innerHTML = titles["about"];
    document.title = "About me";
    //Nav position
    active[0].style.borderBottom = "5px solid rgb(84, 104, 160)";
    active[1].style.borderBottom = "none";
    active[2].style.borderBottom = "none";
    active[3].style.borderBottom = "none";
}

function mySkills() {
    about.style.display = "none";
    skills.style.display = "block";
    portfolio.style.display = "none";
    contact.style.display = "none";
    title.innerHTML = titles["skills"];
    document.title = "Skills";
    //Nav position
    active[1].style.borderBottom = "5px solid rgb(84, 104, 160)";
    active[0].style.borderBottom = "none";
    active[2].style.borderBottom = "none";
    active[3].style.borderBottom = "none";
}

function myPortfolio() {
    about.style.display = "none";
    skills.style.display = "none";
    portfolio.style.display = "block";
    contact.style.display = "none";
    title.innerHTML = titles["portfolio"];

    document.title = "Portfolio";
    //Nav position
    active[2].style.borderBottom = "5px solid rgb(84, 104, 160)";
    active[1].style.borderBottom = "none";
    active[0].style.borderBottom = "none";
    active[3].style.borderBottom = "none";
}

function myContact() {
    about.style.display = "none";
    skills.style.display = "none";
    portfolio.style.display = "none";
    contact.style.display = "block";
    title.innerHTML = titles["contact"];

    document.title = "Contact";
    //Nav position
    active[3].style.borderBottom = "5px solid rgb(84, 104, 160)";
    active[1].style.borderBottom = "none";
    active[2].style.borderBottom = "none";
    active[0].style.borderBottom = "none";
}