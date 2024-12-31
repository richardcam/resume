document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".slide-in");
    const linkBox = document.querySelector(".link-box");

    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("visible");
        }, index * 300); // Retrasa cada elemento 300ms
    });

    // Redirige al enlace especificado en el atributo data-link al hacer clic
    if (linkBox) {
        linkBox.addEventListener("click", () => {
            const url = linkBox.getAttribute("data-link");
            if (url) {
                window.open(url, "_blank");
            }
        });
    }
});
