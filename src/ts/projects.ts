import { Projects } from "./models/Projects"
export function createProjectPage(){
const projectPage=document.querySelector(".projectPage") as HTMLDivElement
const projectPageBackground:HTMLDivElement=document.createElement("div")
const projectPageBgImg: HTMLImageElement=document.createElement("img")
const projectPageContent:HTMLDivElement=document.createElement("div")
const projectPageIntro:HTMLDivElement=document.createElement("div")
const projectPageTitle:HTMLHeadingElement=document.createElement("h3")
const projectPageIntroText:HTMLParagraphElement=document.createElement("p")
const projectsWrapper:HTMLDivElement=document.createElement("div");


const skills:HTMLDivElement=document.createElement("div")
const skillsWrapper:HTMLDivElement=document.createElement("div")
const skillsTitle:HTMLHeadingElement=document.createElement("h3")
const skillsDisplayed:HTMLDivElement=document.createElement("div")

const skillJS:HTMLSpanElement=document.createElement("span")
const skillTS:HTMLSpanElement=document.createElement("span")
const skillReact:HTMLSpanElement=document.createElement("span")
const skillVue:HTMLSpanElement=document.createElement("span")
const skillNodejs:HTMLSpanElement=document.createElement("span")
const skillHTML:HTMLSpanElement=document.createElement("span")
const skillCSS:HTMLSpanElement=document.createElement("span")
const skillSCSS:HTMLSpanElement=document.createElement("span")
const skillBSTRP:HTMLSpanElement=document.createElement("span")
const skillGit:HTMLSpanElement=document.createElement("span")



//projectPageBackground.classList.add("projectPage__bg")
//projectPageBgImg.classList.add("projectPage__bg__img")
//projectPageBgImg.src="https://i.postimg.cc/QCJvPZTs/background-size-100-100-2.png"

//projectPageBgImg.src="https://i.postimg.cc/9FgTQ0Qj/background-size-100-100-1.png"
//projectPageBgImg.alt="Abstract background"

projectPageContent.classList.add("projectContent")
projectPageIntro.classList.add("intro")
projectPageTitle.classList.add("intro__title")
projectPageTitle.innerHTML="Projects"
projectPageIntroText.classList.add("intro__text")
projectPageIntroText.innerHTML="On this page, you will find a collection of my latest projects."

projectsWrapper.classList.add("projectsWrapper")


skills.classList.add("skillsSection")
skillsWrapper.classList.add("skillsDisplayed")
skillsTitle.classList.add("skillsDisplayed__title")
skillsDisplayed.classList.add("skills")
skillJS.classList.add("skills__js","skills__icons")
skillTS.classList.add("skills__ts","skills__icons")
skillReact.classList.add("skills__react","skills__icons")
skillVue.classList.add("skills__vue","skills__icons")
skillNodejs.classList.add("skills__nodejs","skills__icons")
skillHTML.classList.add("skills__html","skills__icons")
skillCSS.classList.add("skills__css","skills__icons")
skillSCSS.classList.add("skills__scss","skills__icons")
skillBSTRP.classList.add("skills__btstrp","skills__icons")
skillGit.classList.add("skills__git","skills__icons")

skillsTitle.innerHTML="Skills"
skillJS.innerHTML=`<iconify-icon icon="teenyicons:javascript-outline"></iconify-icon>`
skillTS.innerHTML=`<iconify-icon icon="teenyicons:typescript-outline"></iconify-icon>`
skillReact.innerHTML=`<iconify-icon icon="fontisto:react"></iconify-icon>`
skillVue.innerHTML=`<iconify-icon icon="uit:vuejs-alt"></iconify-icon>`
skillNodejs.innerHTML=`<i class="fa-brands fa-node-js"></i>`
skillHTML.innerHTML=`<iconify-icon icon="teenyicons:html5-outline"></iconify-icon>`
skillCSS.innerHTML=`<iconify-icon icon="teenyicons:css3-outline"></iconify-icon>`
skillSCSS.innerHTML=`<iconify-icon icon="fa-brands:sass"></iconify-icon>`
skillBSTRP.innerHTML=`<iconify-icon icon="tabler:brand-bootstrap" ></iconify-icon>`
skillGit.innerHTML=`<i class="bi bi-git"></i>`


skillsDisplayed.appendChild(skillTS)
skillsDisplayed.appendChild(skillJS)
skillsDisplayed.appendChild(skillReact)
skillsDisplayed.appendChild(skillVue)
skillsDisplayed.appendChild(skillHTML)
skillsDisplayed.appendChild(skillCSS)
skillsDisplayed.appendChild(skillSCSS)
skillsDisplayed.appendChild(skillBSTRP)
skillsDisplayed.appendChild(skillGit)
skillsWrapper.appendChild(skillsTitle)
skillsWrapper.appendChild(skillsDisplayed)
skills.appendChild(skillsWrapper)

 
projectPageIntro.appendChild(projectPageTitle)
projectPageIntro.appendChild(projectPageIntroText)
projectPageContent.appendChild(projectPageIntro)
projectPageContent.appendChild(projectsWrapper)
projectPageContent.appendChild(skills)

//projectPageBackground.appendChild(projectPageBgImg)
//projectPage.appendChild(projectPageBackground)
projectPage.appendChild(projectPageContent)


createProjects()


}


export function createProjects(){
let projectsWrapper=document.querySelector(".projectsWrapper") as HTMLDivElement;

     let projects:Projects[]=[
        new Projects(
        "Aurora Jewlery",
        "https://i.postimg.cc/NfhgKgbd/aurora-shop.jpg",
        `An agile school group project with <a href="https://www.linkedin.com/in/jennie-forsell-18aba0244/" target="_blank">Jennie Forsell<a/> and <a href="https://www.linkedin.com/in/adam-danielsson-589265193/" target="_blank">Adam Danielsson<a/>.`,
        "Typescript, Html, Scss",
        "https://github.com/h4zan/Group_assignment_group_1",
        "https://page-aurora-shop.netlify.app/",
        ),
    
    new Projects(
        "ToDo List",
        "https://i.postimg.cc/s29cCjqS/dd.jpg",
        "A to-do list app.",
        "Javascript, Html, Scss",
        "https://github.com/h4zan/to-do-list",
        "https://page-todolist.netlify.app/", 
    ),

    new Projects(
        "Movies",
        "https://i.postimg.cc/mDrBQDGy/a2.jpg",
        "A movie database based on OMDb API.",
        "Typescript, Html, Scss",
        "https://github.com/h4zan/movies",
        "https://page-movies-api.netlify.app/", 
    )
    
    ]
    
    
    for (let i = 0; i < projects.length; i++) {
    const projectMainTitle:HTMLHeadingElement=document.createElement("h4");
    const projectContainer:HTMLDivElement=document.createElement("div");
    const projectImg:HTMLImageElement=document.createElement("img");
    const projectInfoContainer:HTMLDivElement=document.createElement("div");
    const projectTitle:HTMLHeadingElement=document.createElement("h4");
    const projectInfo:HTMLParagraphElement=document.createElement("p")
    const projectSkills:HTMLSpanElement=document.createElement("span")
    const projectsLinks: HTMLDivElement=document.createElement("div")
    const projectLive:HTMLAnchorElement=document.createElement("a")
    const projectGithub:HTMLAnchorElement=document.createElement("a")
    const projectGithubLink:HTMLButtonElement=document.createElement("button")
    const projectLiveLink:HTMLButtonElement=document.createElement("button")


    projectContainer.classList.add("projects")
    projectMainTitle.classList.add("projects__title")
    projectImg.classList.add("projects__img")
    projectImg.alt="Image of projects"
    projectInfoContainer.classList.add("projects__info")
    projectTitle.classList.add("projects__info__title")
    projectInfo.classList.add("projects__info__text")
    projectSkills.classList.add("projects__info__skills")
    projectsLinks.classList.add("projects__info__links")
    projectLive.classList.add("projects__info__links__live")
    projectGithub.classList.add("projects__info__links__github")
    projectLiveLink.classList.add("projects__info__links__live__btn", "projects__info__links__sites")
    projectGithubLink.classList.add("projects__info__links__github__btn", "projects__info__links__sites")
    projectLiveLink.type="button"
    projectGithubLink.type="button"


    projectLive.target="_blank"
    projectGithub.target="_blank"

    projectMainTitle.innerHTML=projects[i].projectTitle

    projectImg.src=projects[i].projectImg
    projectTitle.innerHTML=projects[i].projectTitle
    projectInfo.innerHTML=projects[i].projectInfo
    projectSkills.innerHTML=projects[i].projectSkills
    projectLive.href=projects[i].projectLive
    projectGithub.href=projects[i].projectOnGithub
    projectLiveLink.innerHTML="Demo";
    projectGithubLink.innerHTML="Github"
 
    projectInfoContainer.appendChild(projectTitle)
    projectInfoContainer.appendChild(projectInfo)
    projectInfoContainer.appendChild(projectSkills)
    projectLive.appendChild(projectLiveLink)
    projectGithub.appendChild(projectGithubLink)
    projectsLinks.appendChild(projectLive)
    projectsLinks.appendChild(projectGithub)
    projectInfoContainer.appendChild(projectsLinks)
    
    projectContainer.appendChild(projectImg)
    projectContainer.appendChild(projectInfoContainer)
    projectsWrapper.appendChild(projectMainTitle)
    projectsWrapper.appendChild(projectContainer)



}}