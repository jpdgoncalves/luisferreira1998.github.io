import * as ProjectsDisplay from "./src/js/projects-display.js";


async function setup() {
    
    const languageDropdown = document.getElementById("dropdown-languages");
    const tagsDropdown = document.getElementById("dropdown-tags");
    const projectsDisplay = document.getElementById("projects-display");
    const projectsInfo = await fetch("./res/json/projects-info.json").then((response) => response.json());

    let currentTag = undefined;
    let currentLanguage = undefined;

    for(let option of languageDropdown.children[1].children) {
        
        option.addEventListener("click", () => {
            const language = option.querySelector("span").innerText;
            currentLanguage = option.dataset.value;
            languageDropdown.querySelector("div.dropdown-title span").innerText = language;
            ProjectsDisplay.displayProjectsMatch(projectsDisplay, currentLanguage, currentTag);
        });
    }

    for(let option of tagsDropdown.children[1].children) {
        option.addEventListener("click", () => {
            const tag = option.querySelector("span").innerText;
            currentTag = option.dataset.value;
            tagsDropdown.querySelector("div.dropdown-title span").innerText = tag;
            ProjectsDisplay.displayProjectsMatch(projectsDisplay, currentLanguage, currentTag);
        });
    }

    ProjectsDisplay.displayProjectsInfo(projectsDisplay, projectsInfo);
}

document.addEventListener("DOMContentLoaded", setup);

//TODO Append listeners to the list items of the dropdowns
//TODO Hide display cards which do not meet the requirements choosen at the dropdowns
//TODO Display modal when a project card is clicked