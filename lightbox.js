const imagenes = document.querySelectorAll('.img-galeria');
const lightbox = document.querySelector('.imagen-light');
const imgLight = document.querySelector('.agregar-imagen');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
})
lightbox.addEventListener('click', (e)=>{
    if(e.target !== imgLight){
        lightbox.classList.toggle('show');
        imgLight.classList.toggle('showImage');
    }
})
const aparecerImagen = (imagen)=>{
    imgLight.src = imagen;
    lightbox.classList.toggle('show');
    imgLight.classList.toggle('showImage');
    
}