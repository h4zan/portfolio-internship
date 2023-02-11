import { toggleTheme } from "./theme";

export function createMenu(){
const mainPage=document.querySelector(".mainPage") as HTMLDivElement

const header:HTMLElement= document.createElement("header");
const logoWrapper:HTMLDivElement=document.createElement("div")
const logoLetterFirst:HTMLSpanElement=document.createElement("span")
const logoLetterSecond:HTMLSpanElement=document.createElement("span")

const menu:HTMLSpanElement=document.createElement("span")
const menuLineTop:HTMLSpanElement=document.createElement("span")
const menuLineMiddle:HTMLSpanElement=document.createElement("span")
const menuLineBottom:HTMLSpanElement=document.createElement("span")

const overlay:HTMLDivElement=document.createElement("div")
const nav:HTMLElement=document.createElement("nav");
const ul:HTMLUListElement=document.createElement("ul");
const home:HTMLLIElement=document.createElement("li")
const about:HTMLLIElement=document.createElement("li")
const projects:HTMLLIElement=document.createElement("li")
const contact:HTMLLIElement=document.createElement("li")
const homeLink:HTMLAnchorElement=document.createElement("a")
const aboutLink:HTMLAnchorElement=document.createElement("a")
const projectsLink:HTMLAnchorElement=document.createElement("a")
const contactLink:HTMLAnchorElement=document.createElement("a")


header.classList.add("header")

menu.classList.add("menu-btn")
menuLineTop.classList.add("menu-btn__top","menuBtn","topLine")
menuLineMiddle.classList.add("menu-btn__middle", "menuBtn", "middleLine")
menuLineBottom.classList.add("menu-btn__bottom", "menuBtn","bottomLine")

/* menuLineTop.id="topLine"
menuLineMiddle.id="middleLine"
menuLineBottom.id="bottomLine" */

logoWrapper.classList.add("logo")
logoLetterFirst.classList.add("logo__first-letter")
logoLetterSecond.classList.add("logo__second-letter")

logoLetterFirst.innerText="H" 
logoLetterSecond.innerText="⅄"

overlay.classList.add("overlay")
overlay.id="overlay"
nav.classList.add("overlay__nav")

ul.classList.add("overlay__nav__ul")
home.classList.add("overlay__nav__li")
about.classList.add("overlay__nav__li")
projects.classList.add("overlay__nav__li")
contact.classList.add("overlay__nav__li")

homeLink.classList.add("overlay__nav__links")
aboutLink.classList.add("overlay__nav__links")
projectsLink.classList.add("overlay__nav__links")
contactLink.classList.add("overlay__nav__links")


homeLink.href="index.html"
aboutLink.href="#about"
projectsLink.href="#projects"
contactLink.href="#contact"

homeLink.innerHTML="Home"
aboutLink.innerHTML="About"
projectsLink.innerHTML="Projects"
contactLink.innerHTML="Contact"

logoWrapper.appendChild(logoLetterFirst)
logoWrapper.appendChild(logoLetterSecond)

home.appendChild(homeLink)
about.appendChild(aboutLink)
projects.appendChild(projectsLink)
contact.appendChild(contactLink)
ul.appendChild(home) 
ul.appendChild(about)
ul.appendChild(projects)
ul.appendChild(contact)

menu.appendChild(menuLineTop)
menu.appendChild(menuLineMiddle)
menu.appendChild(menuLineBottom)

nav.appendChild(ul)
overlay.appendChild(nav)

header.appendChild(menu)
header.appendChild(logoWrapper)
header.appendChild(overlay)
mainPage.appendChild(header)



logoWrapper.addEventListener("click", () => {
    location.href = "index.html"
  })
  

   function toggleMenu(){
    let menu=document.querySelector(".menu-btn")as HTMLSpanElement
    let overlay=document.querySelector(".overlay")as HTMLDivElement 
    
    menu.addEventListener("click",()=>{
      menu.classList.toggle("menu-btn__active")
  
      overlay.classList.toggle("overlay__open")



    })

    let links =document.querySelectorAll(".overlay__nav__links") as NodeListOf<HTMLAnchorElement>


    links.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("menu-btn__active");
        overlay.classList.remove("overlay__open");
      });
    });

    
    window.addEventListener("scroll", () => {
      menu.classList.remove("menu-btn__active");
      overlay.classList.remove("overlay__open");

    })

  }

  
  toggleTheme();

toggleMenu() 



} 





























/* import { toggleTheme } from "./theme";

export function createMenu(){
const mainPage=document.querySelector(".mainPage") as HTMLDivElement

const header:HTMLElement= document.createElement("header");
const logoWrapper:HTMLDivElement=document.createElement("div")
const logoLetterFirst:HTMLSpanElement=document.createElement("span")
const logoLetterSecond:HTMLSpanElement=document.createElement("span")

const menu:HTMLSpanElement=document.createElement("span")
const menuLineTop:HTMLSpanElement=document.createElement("span")
const menuLineMiddle:HTMLSpanElement=document.createElement("span")
const menuLineBottom:HTMLSpanElement=document.createElement("span")

const overlay:HTMLDivElement=document.createElement("div")
const nav:HTMLElement=document.createElement("nav");
const ul:HTMLUListElement=document.createElement("ul");
const home:HTMLLIElement=document.createElement("li")
const about:HTMLLIElement=document.createElement("li")
const projects:HTMLLIElement=document.createElement("li")
const contact:HTMLLIElement=document.createElement("li")
const homeLink:HTMLAnchorElement=document.createElement("a")
const aboutLink:HTMLAnchorElement=document.createElement("a")
const projectsLink:HTMLAnchorElement=document.createElement("a")
const contactLink:HTMLAnchorElement=document.createElement("a")


header.classList.add("header")

menu.classList.add("header__menu-btn")
menuLineTop.classList.add("header__menu-btn__top")
menuLineMiddle.classList.add("header__menu-btn__middle")
menuLineBottom.classList.add("header__menu-btn__bottom")

menuLineTop.id="topLine"
menuLineMiddle.id="middleLine"
menuLineBottom.id="bottomLine"

logoWrapper.classList.add("header__logo")
logoLetterFirst.classList.add("header__logo__first-letter")
logoLetterSecond.classList.add("header__logo__second-letter")

logoLetterFirst.innerText="H" 
logoLetterSecond.innerText="⅄"

overlay.classList.add("overlay")
overlay.id="overlay"
nav.classList.add("header__nav")

ul.classList.add("header__nav__ul")
home.classList.add("header__nav__li")
about.classList.add("header__nav__li")
projects.classList.add("header__nav__li")
contact.classList.add("header__nav__li")

homeLink.classList.add("header__nav__links")
aboutLink.classList.add("header__nav__links")
projectsLink.classList.add("header__nav__links")
contactLink.classList.add("header__nav__links")


homeLink.href="index.html"
aboutLink.href="#about"
projectsLink.href="#projects"
contactLink.href="#contact"

homeLink.innerHTML="Home"
aboutLink.innerHTML="About"
projectsLink.innerHTML="Projects"
contactLink.innerHTML="Contact"

logoWrapper.appendChild(logoLetterFirst)
logoWrapper.appendChild(logoLetterSecond)

home.appendChild(homeLink)
about.appendChild(aboutLink)
projects.appendChild(projectsLink)
contact.appendChild(contactLink)
ul.appendChild(home) 
ul.appendChild(about)
ul.appendChild(projects)
ul.appendChild(contact)

menu.appendChild(menuLineTop)
menu.appendChild(menuLineMiddle)
menu.appendChild(menuLineBottom)

nav.appendChild(logoWrapper)
nav.appendChild(menu)
nav.appendChild(ul)
header.appendChild(nav)
mainPage.appendChild(header)




logoWrapper.addEventListener("click", () => {
    location.href = "index.html"
  })
  

   function toggleMenu(){
    let menu=document.querySelector(".header__menu-btn")as HTMLSpanElement
    let ul=document.querySelector(".header__nav__ul")as HTMLSpanElement
  
    menu.addEventListener("click",()=>{
      menu.classList.toggle(".header__menu-btn--active")
  
      ul.classList.toggle(".header__nav__ul--toggle")
    })
  }

toggleMenu() 

toggleTheme();


} */