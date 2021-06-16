const d = document;

export default function botonHamburguesa(selecBoton, selecPanel){
    const $boton = d.querySelector(selecBoton);
    const $panel = d.querySelector(selecPanel);

    d.addEventListener("click", e => {
        if(e.target.matches(selecBoton) || e.target.matches(`${selecBoton} *`)){
            $boton.classList.toggle("is-active");  
            $panel.classList.toggle("form--hidden");      
        }
    });
}