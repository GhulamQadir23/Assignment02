const toggle_Button= document.getElementsByClassName('toggleButton')[0]
const nav_Links= document.getElementsByClassName('navLinks')[0]

toggle_Button.addEventListener('click', () =>{
    nav_Links.classList.toggle('active')
})