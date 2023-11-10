const bMore = document.querySelector("#bMore");
const links = document.querySelector("#links") /* el "#" se relaciona al identificador o id, el "." se relaciona a una clase*/

bMore.addEventListener("click", (e) => { /*Al hacer click en el elemento con id = bMore realizar lo siguiente:*/
    links.classList.toggle("collapsed"); /*Añade la palabra collapsed a la clase links del menú mobile para que según su nuevo nombre adquiera los estilos css y el menú se muestre*/
    /*Es decor, alterna los nombres de la clase links entre "links" y "links collapsed", contrayéndose con el primero y desplegándose con el segundo*/
});