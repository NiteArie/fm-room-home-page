const app = (() => {
    const list = document.querySelector(".js-list");
    const menuLogo = document.querySelector(".js-menu-logo");

    let menuHiddenState = true;

    menuLogo.addEventListener("click", (event) => {
        if (menuHiddenState) {
            showList();
            changeMenuLogoToClose();
        } else {
            hideList();
            changeMenuLogoToOpen();
        }

        menuHiddenState = !menuHiddenState;
    })

    function showList() {
        list.classList.remove("first__list--mobile");
    }

    function hideList() {
        list.classList.add("first__list--mobile");
    }

    function changeMenuLogoToClose() {
        menuLogo.src = "../images/icon-close.svg";
    }

    function changeMenuLogoToOpen() {
        menuLogo.src = "../images/icon-hamburger.svg";
    }
    
})();