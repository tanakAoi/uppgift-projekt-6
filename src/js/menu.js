const siteMenu = () => {

    // Get elements from DOM
    const menuButton = document.querySelector('.menu-button')
    const headerMenuList = document.querySelector('.header-menu__list')
    const siteMenu = document.querySelector('.site-menu')
    const trainingMenu = document.querySelector('.training-menu')
    const trainingMenuButton = document.querySelector('.material-symbols-outlined')

    // Toggle header menu
    const toggleHeaderMenu = () => {
        siteMenu.classList.toggle('site-menu--visible')
        menuButton.classList.toggle('menu-button--close')
        headerMenuList.classList.toggle('header-menu__list--invisible')
    }

    // Toggle training menu
    const toggleTrainingMenu = (event) => {
        event.preventDefault()
        trainingMenu.classList.toggle('training-menu--open')
        
    }

    // Create Events
    menuButton.addEventListener('click', toggleHeaderMenu)
    trainingMenuButton.addEventListener('click', toggleTrainingMenu)
}

siteMenu()