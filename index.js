/**
 * @type {MutationObserver[]}
 */
const MutationObservers = [];

function setup() {
    /**
     * @type {HTMLElement[]}
     */
    const dropdowns = document.querySelectorAll(".dropdown");

    for(let dropdown of dropdowns) {
        const mutationObserver = new MutationObserver(onDropdownClassChange);
        mutationObserver.observe(dropdown, {
            attributes: true,
            attributeFilter: ["class"]
        });
        MutationObservers.push(mutationObserver);

        const options = dropdown.children[1].children;

        for(let option of options) {
            option.addEventListener("click", () => {
                dropdown.querySelector("span").innerText = option.querySelector("span").innerText;
            });
        }
    }
}

/**
 * 
 * @param {MutationRecord} records 
 */
function onDropdownClassChange(records) {
    console.log(records);
}

document.addEventListener("DOMContentLoaded", setup);