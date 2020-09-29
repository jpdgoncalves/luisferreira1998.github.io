import toggle from "./modal.js";

/**
 * 
 * @param {string} title 
 * @param {string} body 
 * @param {{tag: string, link: string}[]} links 
 */
function setModalData(title, body, links) {
    const modal = document.getElementById("project-details");
    const modalTitle = modal.querySelector(".modal-title");
    const modalBody = modal.querySelector(".modal-body");

    modalTitle.innerText = title;
    modalBody.innerText = body;

    for(let linkTag of links) {
        const a = document.getElementById(linkTag.tag);
        a.href = linkTag.link;
        a.classList.add("display");
    }
}

function clearModalLinks() {
    const modal = document.getElementById("project-details");
    const modalLinks = modal.querySelector(".modal-links");

    for(let a of modalLinks.children) {
        a.classList.remove("display");
    }
}

/**
 * 
 * @param {string} title 
 * @param {string} body 
 * @param {{tag: string, link: string}[]} links 
 */
export function showModal(title, body, links) {
    clearModalLinks();
    setModalData(title, body, links);
    toggle("project-details", true);
}

export function hideModal() {
    toggle("project-details", false);
}