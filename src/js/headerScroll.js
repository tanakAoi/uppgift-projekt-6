const headerScroll = () => {

    //Get elements from DOM
    const header = document.querySelector('.site-header')

    //Toggle header class
    const toggleHeaderClass = () => {

		// If window has scrolled more than 200px, add a class.
        // Else remove it.

        if ( window.scrollY > 770 ) {

            header.classList.add('site-header--scroll')

        } else {

            header.classList.remove('site-header--scroll')
        }

    }

		// Add event to window scroll
    window.addEventListener('scroll', toggleHeaderClass)

}

headerScroll()