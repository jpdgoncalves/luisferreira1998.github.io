import * as ProjectDisplay from "./src/js/projects-display.js";


async function setup() {
    /**
     * @type {HTMLElement[]}
     */
    const dropdowns = document.querySelectorAll(".dropdown");

    for(let dropdown of dropdowns) {
        const options = dropdown.children[1].children;

        for(let option of options) {
            option.addEventListener("click", () => {
                dropdown.querySelector("span").innerText = option.querySelector("span").innerText;
            });
        }
    }

    const projectsDisplay = document.getElementById("projects-display");
    const projectsInfo = await fetch("./res/json/projects-info.json").then((response) => response.json());

    for(let project of projectsInfo) {
        const {languages, title, description, iconURL, links} = project;
        const tags = links.map((obj) => obj.tag);
        const projectCard = ProjectDisplay.createProjectCardFromJson(iconURL, title, description, tags);
        projectsDisplay.appendChild(projectCard);
    }
}

document.addEventListener("DOMContentLoaded", setup);