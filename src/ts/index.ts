
import { createMenu } from "./header";
import { createMainPage } from "./main";
import { createAboutPage } from "./about";
import { createContactPage } from "./contact";
import { createFooter } from "./footer";
import { createProjectPage } from "./projects";
import { toggleTheme } from "./theme";

 window.addEventListener("load", () => {
    createMenu()
    createMainPage()  
    createAboutPage()
    createProjectPage()
    createContactPage()
    createFooter();

 
}); 


