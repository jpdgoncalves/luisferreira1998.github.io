import * as ProjectsDisplay from "./src/js/projects-display.js";


async function setup() {
    
    const languageDropdown = document.getElementById("dropdown-languages");
    const tagsDropdown = document.getElementById("dropdown-tags");
    const projectsDisplay = document.getElementById("projects-display");
    const projectsInfo = await fetch("./res/json/projects-info.json").then((response) => response.json());

    for(let option of languageDropdown.children[1].children) {
        
        option.addEventListener("click", () => {
            const language = option.querySelector("span").innerText;
            languageDropdown.querySelector("div.dropdown-title span").innerText = language;
        });
    }

    for(let option of tagsDropdown.children[1].children) {
        option.addEventListener("click", () => {
            const tag = option.querySelector("span").innerText;
            tagsDropdown.querySelector("div.dropdown-title span").innerText = tag;
        });
    }

    ProjectsDisplay.displayProjectsInfo(projectsDisplay, projectsInfo);
}

document.addEventListener("DOMContentLoaded", setup);

//TODO Append listeners to the list items of the dropdowns
//TODO Hide display cards which do not meet the requirements choosen at the dropdowns
//TODO Display modal when a project card is clicked