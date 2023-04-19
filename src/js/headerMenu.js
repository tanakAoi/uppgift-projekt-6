const siteMenu = () => {

    // Get elements from DOM
    const menuButton = document.querySelector('.menu-button')
    // const headerMenuList = document.querySelector('.header-menu__list')
    const siteMenu = document.querySelector('.site-menu')

    // Toggle header menu
    const toggleHeaderMenu = () => {
        menuButton.classList.toggle('menu-button--close')
        // headerMenuList.classList.toggle('header-menu__list--invisible')
        siteMenu.classList.toggle('site-menu--visible')
    }
    
    // Create Events
    menuButton.addEventListener('click', toggleHeaderMenu)
}

siteMenu()