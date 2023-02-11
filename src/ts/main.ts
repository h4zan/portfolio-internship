export function createMainPage(){
const mainPage=document.querySelector(".mainPage") as HTMLDivElement
const mainContent:HTMLDivElement=document.createElement("div")
const mainBackground:HTMLDivElement=document.createElement("div")
const main:HTMLElement=document.createElement("main")
const heroImgContainer:HTMLDivElement=document.createElement("div")
const heroImg:HTMLImageElement=document.createElement("img")
const introWrapper:HTMLDivElement=document.createElement("div")
const intro:HTMLParagraphElement=document.createElement("p")
const introBtn:HTMLButtonElement=document.createElement("button")
const moreInfo:HTMLAnchorElement=document.createElement("a")

mainContent.classList.add("mainContent")
mainBackground.classList.add("background")
main.classList.add("main")
heroImgContainer.classList.add("main__hero")
heroImg.classList.add("main__hero__img")
heroImg.alt="An illustration of a woman typing on her laptop."
heroImg.src="https://i.postimg.cc/Z5Kt2GHn/pixeltrue-idea-1-1.png"
introWrapper.classList.add("main__intro")
intro.classList.add("main__intro__text")
introBtn.classList.add("main__moreInfo__btn")
moreInfo.classList.add("main__moreInfo")

intro.innerHTML=
`Hello World!
I am a Front End Developer based in Stockholm,Sweden.`

introBtn.innerHTML="Learn More"
introBtn.type="button"
moreInfo.href="#about"


heroImgContainer.appendChild(heroImg)
introWrapper.appendChild(heroImgContainer)
introWrapper.appendChild(intro)
moreInfo.appendChild(introBtn)
introWrapper.appendChild(moreInfo)
main.appendChild(heroImgContainer)
main.appendChild(introWrapper)
mainContent.appendChild(main)
mainPage.appendChild(mainContent)



function typeWriter(e:HTMLParagraphElement) {
      
  const textArray = e.innerHTML.split('');
  e.innerHTML = '';
  textArray.forEach((letter, i) =>
      setTimeout(() => (e.innerHTML += letter), 100 * i)
  );

window.setTimeout(typeWriter, 100);
}
typeWriter(intro);


}
