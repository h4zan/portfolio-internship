export function createContactPage(){
    const contactPage= document.querySelector(".contactPage") as HTMLDivElement
    const contactWrapper:HTMLElement=document.createElement("section")
    const contactTitle:HTMLHeadingElement=document.createElement("h3")
    const contactImgContainer:HTMLDivElement=document.createElement("div")
    const contactImg:HTMLImageElement=document.createElement("img")
    const contactTextWrapper:HTMLDivElement=document.createElement("div")
    const contactText:HTMLParagraphElement=document.createElement("p")
    const contactPageBtn:HTMLButtonElement=document.createElement("button")
    const contactPageBtnLink:HTMLAnchorElement=document.createElement("a")

   
    contactWrapper.classList.add("contact")
    contactTitle.classList.add("contact__title")
    contactTitle.innerHTML="Contact"
    contactImgContainer.classList.add("contact__bg")
    contactImg.classList.add("contact__bg__img")
    contactImg.src="https://i.postimg.cc/8CJw63j5/pixeltrue-welcome-1-1.png"
    contactImg.alt="A women waves from window"
    contactTextWrapper.classList.add("contact__info")
    contactText.classList.add("contact__info__text")
    contactText.innerHTML="Thank you for visiting my page.<br>If you would like to leave feedback, have a project in mind or simply want to say hello, please don't hesitate to reach out."
    contactPageBtn.classList.add("contact__btn")
    contactPageBtn.innerHTML="Get in Touch"
    contactPageBtn.type="button"
    contactPageBtnLink.classList.add("contact__btn__link")
    contactPageBtnLink.href="mailto:","hazan.yigit@medieinstitutet.se"


    contactImgContainer.appendChild(contactImg)
    contactTextWrapper.appendChild(contactText)
    contactWrapper.appendChild(contactTitle)
    contactWrapper.appendChild(contactImgContainer)
    contactWrapper.appendChild(contactTextWrapper)
    contactPageBtnLink.appendChild(contactPageBtn)
    contactTextWrapper.appendChild(contactPageBtnLink)
    contactPage.appendChild(contactWrapper)

    sendEmail()
}

export function sendEmail(){
    const sendEmail=document.querySelector(".contact__btn__link")

    sendEmail?.addEventListener("click",(e)=>{

        e.preventDefault()
        const adress="hazan.yigit@medieinstitutet.se"
        window.location.href = "mailto:"+ adress;
    })

}