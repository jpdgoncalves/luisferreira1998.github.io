
/**
 * 
 * @param {string} name 
 * @param {true | false} [state] 
 */
export default function toggle(name, state) {
    const modal = document.querySelector(`div.modal[data-modal-name=${name}]`);

    if (!modal) {
        console.warn("Modal", name, "doesn't exist");
        return;
    }

    const dataset = modal.dataset;

    if (state === undefined) {
        state = dataset.modalActive === "false";
    }

    if(dataset.modalActive === state.toString()) {
        return;
    }

    if(state) {
        modal.style.visibility = "visible";
        dataset.modalActive = "true";
    } else {
        dataset.modalActive = "false";
        modal.addEventListener("transitionend", () => {
            modal.style.visibility = "hidden";
        }, {once: true});
    }
}



document.addEventListener("DOMContentLoaded", () => {
    const modals = document.querySelectorAll("div.modal");

    for (let modal of modals) {
        modal.dataset.modalActive = "false";
        modal.style.visibility = "hidden";
        modal.addEventListener("click", ({target}) => {
            if(target.classList.contains("modal")) {
                toggle(target.dataset.modalName, false);
            }
        });
        modal.addEventListener("touchstart", ({target}) => {
            if(target.classList.contains("modal")) {
                toggle(target.dataset.modalName, false);
            }
        });
    }
});

window.toggle = toggle;