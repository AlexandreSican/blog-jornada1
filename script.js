const icon = document.querySelectorAll("#icon")

icon.forEach((icon) => {
    icon.addEventListener('click', () => {
    icon.classList.toggle("filled")
})
})