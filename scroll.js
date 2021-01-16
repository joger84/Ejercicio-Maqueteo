let animado1 = document.querySelector('.animado1');
let animado2 = document.querySelector('.animado2');

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
   
        if(animado1.offsetTop + 1000 < scrollTop){
            animado1.style.opacity = 1;
        }

         if(animado2.offsetTop + 2300 < scrollTop){
            animado2.style.opacity = 1;
        }
    
}

window.addEventListener('scroll', mostrarScroll)