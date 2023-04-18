const collapsibleContent = () => {

    // Get element from DOM
    const collapsibleLink = document.querySelector('.collapsible-content__link')

    // Add expand icons to each link
    const addCollapseButtonsToLink = () => {

        const buttonEl = document.createElement('span')
        buttonEl.classList.add('material-symbols-outlined')
        buttonEl.textContent =  'expand_more'

        collapsibleLink.append(buttonEl)

    }

    // Run function to add icons to link
    addCollapseButtonsToLink()


    // Function to toggle content and change icon on link
    const toggleContent = (event) => {

        // Prevent default behavior of a link (removing href="" function)
        event.preventDefault()

        // Get sibling of clicked link
        const sibling = event.currentTarget.nextElementSibling

        // Toggle class on sibling
        sibling.classList.toggle('training-menu--open')

        // Change icon on button in link
        const expandIcon = event.currentTarget.querySelector('span')

        // If icon has expand_more, change it to _less, vice versa
        if ( expandIcon.textContent === 'expand_more' ) {

            expandIcon.textContent = 'expand_less'

        } else {

            expandIcon.textContent = 'expand_more'

        }

    }

    // Add events to all links
    collapsibleLink.addEventListener('click', toggleContent)

}

collapsibleContent()