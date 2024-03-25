function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId)
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
    }
}

const menuIcon = document.getElementById('menu-toggle')
const dropdownMenu = document.getElementById('dropdown-menu')

menuIcon.addEventListener('click', function() {
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
    console.log('okay na')
})
