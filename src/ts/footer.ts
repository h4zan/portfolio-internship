export function createFooter() {
  const portfolio=document.querySelector(".portfolio") as HTMLDivElement

    const footer: HTMLDivElement = document.createElement(
      "footer"
    ) as HTMLDivElement;
   
  
    const footerContainer: HTMLDivElement = document.createElement(
      "div"
    ) as HTMLDivElement;
  
  
    const footerRow: HTMLDivElement = document.createElement(
      "div"
    ) as HTMLDivElement;
  
  
    const arrowWrapper: HTMLAnchorElement = document.createElement(
      "a"
    ) as HTMLAnchorElement;
    
    const arrowIcon: HTMLSpanElement = document.createElement(
      "span"
    ) as HTMLSpanElement;
   
  
  
    const footerCol: HTMLDivElement = document.createElement(
      "div"
    ) as HTMLDivElement;
   
  
  
    const footerUl: HTMLUListElement = document.createElement(
      "ul"
    ) as HTMLUListElement;
  
    const name: HTMLLIElement = document.createElement(
      "li"
    ) as HTMLLIElement;
    
    const email: HTMLLIElement = document.createElement(
      "li"
    ) as HTMLLIElement;
    
  
    const footerCol1: HTMLDivElement = document.createElement(
      "div"
    ) as HTMLDivElement;
  
    const footerUl1: HTMLUListElement = document.createElement(
      "ul"
    ) as HTMLUListElement;
   
    const linkedin: HTMLLIElement = document.createElement(
      "li"
    ) as HTMLLIElement;
  
    const linkedinLink: HTMLAnchorElement = document.createElement(
      "a"
    ) as HTMLAnchorElement;
  
  
    const github: HTMLLIElement = document.createElement(
      "li"
    ) as HTMLLIElement;
    github.classList.add("footer__li")
  
    const githubLink: HTMLAnchorElement = document.createElement(
      "a"
    ) as HTMLAnchorElement;
  
  
    const copyRightWrapper: HTMLDivElement = document.createElement(
      "div"
    ) as HTMLDivElement;
  
    const copyRight: HTMLParagraphElement = document.createElement(
      "p"
    ) as HTMLParagraphElement;
    
  
  ////////////////////////////////////
    footer.classList.add("footer")
    footerContainer.classList.add("footer__container");
    footerRow.classList.add("row");
  
  
    arrowWrapper.classList.add("arrow");
    arrowWrapper.href = "#";
    arrowWrapper.setAttribute("aria-label", "arrow-scroll");
    //arrowIcon.classList.add("bi", "bi-arrow-up", "arrow");
    arrowIcon.classList.add("arrowIcon");
    arrowIcon.innerHTML=`<iconify-icon icon="material-symbols:keyboard-double-arrow-up"></iconify-icon>`

  
    footerCol.classList.add("footer-col")
    footerUl.classList.add("footer__ul", "footer__info");
  
    name.classList.add("footer__li");
    name.innerHTML="Hazan Yigit"
    email.classList.add("footer__li");
    email.innerHTML="hazan.yigit@medieinstitutet.se" 
  
    footerCol1.classList.add("footer-col");
    footerUl1.classList.add("footer__ul", "footer__icons");

  
    linkedin.classList.add("footer__li")
    linkedinLink.href = "https://www.linkedin.com/in/hazan-y-91119a24b";
    linkedinLink.setAttribute("aria-label", "linkedin-logo");
    linkedinLink.target="_blank"
    linkedinLink.classList.add("footer__links"); 
    linkedinLink.innerHTML = '<i class="bi bi-linkedin"></i>';
  
    githubLink.href = "https://github.com/h4zan";
    githubLink.setAttribute("aria-label", "github-logo");
    githubLink.target="_blank"
    githubLink.classList.add("footer__links"); 
    githubLink.innerHTML = `<i class="bi bi-github"></i>`;
  
    copyRight.classList.add("footer__copyright");
    copyRight.innerHTML = `
    Illustrations by Pixeltrue from Ouch,Icons8.com
    `;
  
  
  //////////////////////////////////////////777
   arrowWrapper.appendChild(arrowIcon);
  footerContainer.appendChild(arrowWrapper); 
  
    footerUl.appendChild(name)
    footerUl.appendChild(email)
    footerCol.appendChild(footerUl)
  
    linkedin.appendChild(linkedinLink)
    github.appendChild(githubLink)
    footerUl1.appendChild(linkedin)
    footerUl1.appendChild(github)
    footerCol1.appendChild(footerUl1)
    copyRightWrapper.appendChild(copyRight);
    footerRow.appendChild(footerCol);
    footerRow.appendChild(footerCol1);
  
    footerContainer.appendChild(footerRow);
    footerContainer.appendChild(copyRightWrapper);
    footer.appendChild(footerContainer)
    portfolio.appendChild(footer)
  
  }
  
  