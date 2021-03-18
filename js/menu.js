const iconoMenu = document.querySelector('.menu')
const  menu = document.querySelector('.menu-nav')

// console.log(iconoMenu)
// console.log(menu)

    iconoMenu.addEventListener('click', ()=>{
        menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
        && e.target !=menu && e.target != iconoMenu){
        
            menu.classList.toggle("spread")
    }
})