function setup() {
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
}

document.addEventListener("DOMContentLoaded", setup);