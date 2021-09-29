const indexSection = document.getElementById('index')
const aboutSection = document.getElementById('about')
const projectsSection = document.getElementById('projects')
const scrollToAbout = document.querySelectorAll('.scroll-about')
const scrollToProjects = document.querySelectorAll('.scroll-projects')
const scrollToIndex = document.querySelectorAll('.scroll-index')
function scroller(clickedElement, targetSection) {
    clickedElement.forEach(e => {
        e.addEventListener('click', (e) => {
            e.preventDefault()
            targetSection.scrollIntoView()
        })
    })
}
scroller(scrollToAbout, aboutSection)
scroller(scrollToProjects, projectsSection)
scroller(scrollToIndex, indexSection)
