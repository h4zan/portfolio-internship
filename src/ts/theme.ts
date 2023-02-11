export function toggleTheme(){
const header=document.querySelector(".header") as HTMLDivElement
const themeWrapper:HTMLSpanElement = document.createElement("span");
const darkModeToggleButton = document.createElement("button");

themeWrapper.classList.add("theme")

darkModeToggleButton.id="dark-mode-toggle"
darkModeToggleButton.classList.add("dark-mode-toggle")
darkModeToggleButton.ariaLabel="toggle dark mode"
darkModeToggleButton.type="button"

darkModeToggleButton.innerHTML = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 28 28"
    fill="none"
    stroke="none"
    stroke-width="1"
    stroke-linecap="round"
    stroke-linejoin="round">

    <mask id="mask">
      <rect x="0" y="0" width="100%" height="100%" fill="white" />
      <circle cx="18" cy="10" r="9" fill="black" />
    </mask>

    <circle fill="black" cx="12" cy="12" r="9" mask="url(#mask)" />

  </svg>
`;


themeWrapper.appendChild(darkModeToggleButton);
header.appendChild(themeWrapper);

let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle') as HTMLButtonElement

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.removeItem('darkMode');
}
 
if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});

}



