const app = (() => {
    const list = document.querySelector(".js-list");
    const menuLogo = document.querySelector(".js-menu-logo");
    const previousButton = document.querySelector(".js-previous");
    const nextButton = document.querySelector(".js-next");

    const heroElement = document.querySelector(".js-hero");
    const heroTitleElement = document.querySelector(".js-title");
    const heroDescElement = document.querySelector(".js-desc");

    let menuHiddenState = true;

    let currentSlideCounter = 0;

    const titles = [
        `Discover innovative ways to decorate`,
        `We are available all across the globe`,
        `Manufactured with the best materials`,
    ]

    const descs = [
        `We provide unmatched quality, comfort, and style for property owners across the country.
        Our experts combine form and function in bringing your vision to life. Create a room in your
        own style with our collection and make your property a reflection of you and what you love.`,
        `With stores all over the world, it's easy for you to find furniture for your home or place of business.
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
        store locator. Any questions? Don't hesitate to contact us today.`,
        `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
        to ensure that every product is made as perfect and as consistent as possible. With three decades of
        experience in this industry, we understand what customers want for their home and office.`
    ]

    previousButton.addEventListener("click", (event) => {
        if ( currentSlideCounter == 0 ) {
            currentSlideCounter = 2;
        } else {
            currentSlideCounter--;
        }

        if (
            document.body.clientWidth <= 560
        ) {
            heroElement.style.backgroundImage = `url(images/mobile-image-hero-${currentSlideCounter + 1}.jpg)`;
        } else {
            heroElement.style.backgroundImage = `url(images/desktop-image-hero-${currentSlideCounter + 1}.jpg)`;
        }

        heroTitleElement.textContent = titles[currentSlideCounter];
        heroDescElement.textContent = descs[currentSlideCounter];
    })

    nextButton.addEventListener("click", (event) => {
        if ( currentSlideCounter == 2 ) {
            currentSlideCounter = 0;
        } else {
            currentSlideCounter++;
        }

        if (
            document.body.clientWidth <= 560
        ) {
            heroElement.style.backgroundImage = `url(images/mobile-image-hero-${currentSlideCounter + 1}.jpg)`;
        } else {
            heroElement.style.backgroundImage = `url(images/desktop-image-hero-${currentSlideCounter + 1}.jpg)`;
        }

        heroTitleElement.textContent = titles[currentSlideCounter];
        heroDescElement.textContent = descs[currentSlideCounter];
    })

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