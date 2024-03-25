function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId)
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
    }
}

 const menuToggle = document.querySelector('.menu-toggle')
  const dropdownMenu = document.querySelector('.dropdown-menu')

  menuToggle.addEventListener('click', function () {
    dropdownMenu.classList.toggle('clicked')
  })

  document.addEventListener('click', function (event) {
    if (!dropdownMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      dropdownMenu.classList.remove('clicked')
    }
  })
