const siteMenu = () => {

    // Get elements from DOM
    const menuButton = document.querySelector('.header-menu__button')
    const sideMenu = document.querySelector('.side-menu')

    // Toggle header menu
    const toggleHeaderMenu = () => {
        menuButton.classList.toggle('header-menu__button--close')
        sideMenu.classList.toggle('side-menu--visible')
    }
    
    // Create Events
    menuButton.addEventListener('click', toggleHeaderMenu)
}

siteMenu()