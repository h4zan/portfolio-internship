export function createAboutPage(){

const aboutPage=document.querySelector(".aboutPage") as HTMLDivElement

const aboutPageBackground:HTMLDivElement=document.createElement("div")
const aboutPageBgImg: HTMLImageElement=document.createElement("img")
const aboutTitle:HTMLHeadingElement=document.createElement("h3")
const aboutWrapper:HTMLDivElement=document.createElement("div")
const aboutImgContainer:HTMLDivElement=document.createElement("div")
const aboutImg:HTMLImageElement=document.createElement("img")
const aboutTextWrapper:HTMLDivElement=document.createElement("div")
const aboutText:HTMLParagraphElement=document.createElement("p")

aboutWrapper.classList.add("about")
aboutTitle.classList.add("about__title")

aboutImgContainer.classList.add("about__profile")
aboutImg.classList.add("about__profile__img")
aboutTextWrapper.classList.add("about__info")
aboutText.classList.add("about__info__text")


aboutPageBackground.classList.add("aboutPage__bg")
aboutPageBgImg.classList.add("aboutPage__bg__img")





//preserveAspectRatio="none" width="100vw" height="100vh"
/* aboutPageBackground.innerHTML=`

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 1422 800">
  

<circle r="8.5" cx="1410" cy="11" fill="#5222D0"></circle>  
<circle r="6.5" cx="1404" cy="14" fill="#EC615B"></circle>

<circle r="5" cx="1413" cy="175" stroke-width="2" stroke="#EC615B" fill="none"></circle>
<circle r="4.5" cx="1399" cy="165" fill="#EC615B"></circle>

<g transform="translate(1380,335)">
<path  d="M 10 20 Q 50 5, 35 20 T 40 30" stroke="#5222D0" fill="transparent"/>
</g>

<g transform="translate(1380,485) rotate(45, 20, 22.5)">
<path 
  d="M 5 20 Q 10 15, 15 20 Q 20 25, 25 20 Q 30 15, 35 20" 
  stroke="#d9d9d9" 
  fill="transparent"/>
<path 
  d="M 5 22.5 Q 10 17.5, 15 22.5 Q 20 27.5, 25 22.5 Q 30 17.5, 35 22.5" 
  stroke="#d9d9d9" 
  fill="transparent"/>
<path 
  d="M 5 25 Q 10 20, 15 25 Q 20 30, 25 25 Q 30 20, 35 25" 
  stroke="#d9d9d9" 
  fill="transparent"/>
</g>
                    
<circle r="5.5" cx="1405" cy="660" fill="#EC615B"></circle>
                                                
                                                
 <g >
    <circle r="8" cx="1410" cy="790" fill="#EC615B"></circle>
    <circle r="5.5" cx="1410" cy="775" fill="#5222D0"></circle>
    <circle r="5.5" cx="1395" cy="785" stroke-width="2" stroke="#EC615B" fill="none"></circle>
    <circle r="3.5" cx="1395" cy="785" fill="#5222D0"></circle>
    <circle r="3" cx="1395" cy="770" stroke-width="2" stroke="#5222D0" fill="none"></circle>
        
    
 </g>
 <circle r="6.5" cx="12" cy="10" fill="#5222D0"></circle>  
  <circle r="6.5" cx="27" cy="25" fill="#EC615B"></circle>
 

<circle r="5" cx="14" cy="175" stroke-width="2" stroke="#5222D0" fill="none"></circle>
  <circle r="4.5" cx="29" cy="165" fill="#5222D0"></circle>


 <g transform="translate(-4,335)">
  <path  d="M 10 20 Q 50 5, 35 20 T 40 30" stroke="#EC615B" fill="transparent"/>
 </g>
                                                
  
<g transform="translate(11,485) rotate(-45, 20, 22.5)">
    <path 
    d="M 5 20 Q 10 15, 15 20 Q 20 25, 25 20 Q 30 15, 35 20" 
    stroke="#d9d9d9" 
    fill="transparent"/>
    <path 
    d="M 5 22.5 Q 10 17.5, 15 22.5 Q 20 27.5, 25 22.5 Q 30 17.5, 35 22.5" 
    stroke="#d9d9d9" 
    fill="transparent"/>
  <path 
    d="M 5 25 Q 10 20, 15 25 Q 20 30, 25 25 Q 30 20, 35 25" 
    stroke="#d9d9d9" 
    fill="transparent"/>
</g>
 
 <circle r="5.5" cx="14" cy="660" fill="#5222D0"></circle> 


 <g >
    <circle r="8" cx="14" cy="790" fill="#5222D0"></circle>
    <circle r="5.5" cx="32" cy="788" fill="#EC615B"></circle>
    <circle r="3.5" cx="35" cy="770" fill="#5222D0"></circle>
    <circle r="5" cx="18" cy="772" stroke-width="2" stroke="#EC615B" fill="none"></circle>
   </g>
</svg>

` */

aboutPageBgImg.alt="Abstract background with dots and squiggles"

aboutTitle.innerHTML="About Me"
aboutImg.src="https://i.postimg.cc/DyvzgY9f/73435256.jpg"
aboutImg.alt="A black and white photo of a woman"
aboutText.innerHTML=`
Hi there,<br>

<br>My name is Hazan Yigit, and I am an aspiring Front End Developer currently in my first year at Medieinstitutet. I am actively seeking an internship opportunity to apply my skills and knowledge in a real-world setting.<br>
<br>I strive for balance between design and functionality, and my attention to detail and commitment to excellence ensures high-quality results.<br>
<br>I am excited to start this next chapter in my career.

I cordially invite you to review my portfolio and welcome the opportunity to discuss potential internship opportunities. <br>
<br>Thank you for your consideration.

`


//aboutPageBackground.appendChild(aboutPageBgImg)
aboutWrapper.appendChild(aboutTitle)
aboutImgContainer.appendChild(aboutImg)
aboutTextWrapper.appendChild(aboutText)
aboutWrapper.appendChild(aboutImgContainer)
aboutWrapper.appendChild(aboutTextWrapper)
aboutPageBackground.appendChild(aboutWrapper)
aboutPage.appendChild(aboutPageBackground)


aboutPage.appendChild(aboutWrapper) 

}


