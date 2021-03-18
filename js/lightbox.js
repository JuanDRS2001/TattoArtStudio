const galeria = document.querySelectorAll('.img-galeria')
const galeriaLight = document.querySelector('.agregar-img')
const contenedorLight = document.querySelector('.imagen-light')
const iconoMenu1 = document.querySelector('.menu')


galeria.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImg(imagen.getAttribute('src'))
        
    })
})

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== galeriaLight){
        contenedorLight.classList.toggle('show')
        galeriaLight.classList.toggle('showImage')
        iconoMenu1.style.opacity = '1' 
    }
})

const aparecerImg = (imagen)=>{
    galeriaLight.src = imagen;
    contenedorLight.classList.toggle('show')
    galeriaLight.classList.toggle('showImage')
    iconoMenu1.style.opacity = '0' 
}