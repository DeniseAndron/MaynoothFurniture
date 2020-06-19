//Hamburger toggle button
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
// If the toggle clast exists it will show it , if not it will not
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})