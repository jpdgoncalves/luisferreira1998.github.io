import * as Config from "./config.js";


/**
 * 
 * @param {string} name 
 * @param {...string} cls 
 */
function createElementClass(name, ...cls) {
    const element = document.createElement(name);
    if(cls.length > 0) element.classList.add(...cls);
    return element;
}


/**
 * 
 * @param {HTMLElement} element 
 * @param  {...HTMLElement} children 
 */
function appendChildren(element, ...children) {
    for(let child of children) {
        element.appendChild(child);
    }
}


/**
 * 
 * @param {string} iconURL 
 */
function createIconElement(iconURL) {
    const projectIcon = createElementClass("div", "project-icon");
    const img = createElementClass("img");

    img.src = iconURL;
    projectIcon.appendChild(img);
    return projectIcon;
}


/**
 * 
 * @param {string} title 
 */
function createTitleElement(title) {
    const projectTitle = createElementClass("div", "project-title");
    const h1 = createElementClass("h1");

    h1.innerText = title;
    projectTitle.appendChild(h1);
    return projectTitle;
}


/**
 * 
 * @param {string} text 
 */
function createBodyElement(text) {
    const projectBody = createElementClass("div", "project-body");
    
    projectBody.innerText = text;
    return projectBody;
}


/**
 * 
 * @param {string[]} tags 
 */
function createTagsElement(tags) {
    const projectTags = createElementClass("div", "project-tags");

    for(let tag of tags) {
        const colorClass = Config.TagsToClassColors[tag];
        const tagElement = createElementClass("span", "project-tag", colorClass);
        tagElement.innerText = tag;
        projectTags.appendChild(tagElement);
    }

    return projectTags;
}


/**
 * 
 * @param {HTMLElement} iconElement 
 * @param {HTMLElement} titleElement 
 * @param {HTMLElement} bodyElement 
 * @param {HTMLElement} tagsElement 
 */
function createProjectCardElement(iconElement, titleElement, bodyElement, tagsElement) {
    const cardElement = createElementClass("div", "project-card");
    
    appendChildren(
        cardElement,
        iconElement,
        titleElement,
        bodyElement,
        tagsElement
    );

    return cardElement;
}

/**
 * 
 * @param {string} iconURL 
 * @param {string} title 
 * @param {string} body 
 * @param {string[]} tags 
 */
export function createProjectCardFromJson(iconURL, title, body, tags) {
    const projectIcon = createIconElement(iconURL);
    const projectTitle = createTitleElement(title);
    const projectBody = createBodyElement(body);
    const projectTags = createTagsElement(tags);
    const projectCard = createProjectCardElement(
        projectIcon,
        projectTitle,
        projectBody,
        projectTags
    );

    return projectCard;
}