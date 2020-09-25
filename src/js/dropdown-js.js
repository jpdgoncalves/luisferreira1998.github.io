
/**
 * @type {Set<HTMLElement>}
 */
const Dropdowns = new Set();
let InteractedWithDropdown = false;

function setup() {
    const dropdowns = document.querySelectorAll(".dropdown");
    
    for(let i = 0, zIndex = dropdowns.length; i < dropdowns.length; i++, zIndex--) {
        const dropdown = dropdowns[i];
        dropdown.style.zIndex = zIndex;
        dropdown.addEventListener("click", dropdownItemClick);
        //dropdown.addEventListener("touchstart", dropdownItemClick);
        Dropdowns.add(dropdown);
    }

    document.addEventListener("click", () => {
        if(InteractedWithDropdown) {
            InteractedWithDropdown = false;
        } else {
            for(let dropdown of Dropdowns) {
                dropdown.classList.remove("active");
            }
        }
    });
}

/**
 * Gets an ancestor that matches a certain condition (including itself)
 * @param {HTMLElement} element Element to match
 * @param {function(HTMLElement): boolean} condition to be matched
 */
function getAncestorMatch(element, matcher) {
    if(! (element && matcher)) {
        return null;
    }
    
    if(matcher(element)) {
        return element;
    } else {
        return getAncestorMatch(element.parentElement, matcher);
    }
}

/**
 * 
 * @param {HTMLElement} element 
 */
function hasDropdownClass(element) {
    return element.matches(".dropdown");
}

/**
 * @param {Event} e 
 */
function dropdownItemClick(e) {
    /**
     * @type {HTMLElement}
     */
    const maybeDropdown = getAncestorMatch(e.target, hasDropdownClass);
    for(let dropdown of Dropdowns) {
        if(dropdown === maybeDropdown) {
            dropdown.classList.toggle("active");
            InteractedWithDropdown = true;
        } else {
            dropdown.classList.remove("active");
        }
    }
}



document.addEventListener("DOMContentLoaded", setup);