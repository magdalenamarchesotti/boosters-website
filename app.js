
let animadoTituloTrabajamos = document.querySelector('.seccionTrabajamos');
let mostrarScrollTituloTrabajamos = () => {
let scrollTopTituloTrabajamos = document.documentElement.scrollTop;
let alturaAnimadoTituloTrabajamos = animadoTituloTrabajamos.offsetTop;
if (alturaAnimadoTituloTrabajamos - 600 < scrollTopTituloTrabajamos) {
animadoTituloTrabajamos.style.opacity = 1;
animadoTituloTrabajamos.classList.add('mostrarCards');
}
}
window.addEventListener ('scroll', mostrarScrollTituloTrabajamos);

let animado = document.querySelector('.allCardsTrabajamosPrimeraFila');
let mostrarScroll = () => {
let scrollTop = document.documentElement.scrollTop;
let alturaAnimado = animado.offsetTop;
if (alturaAnimado - 500 < scrollTop) {
animado.style.opacity = 1;
animado.classList.add('mostrarCards');
}
}
window.addEventListener ('scroll', mostrarScroll);

let animadoDos = document.querySelector('.allCardsTrabajamosSegundaFila');
let mostrarScrollDos = () => {
let scrollTopDos = document.documentElement.scrollTop;
let alturaAnimadoDos = animadoDos.offsetTop;
if (alturaAnimadoDos - 500 < scrollTopDos) {
animadoDos.style.opacity = 1;
animadoDos.classList.add('mostrarCards');
}
}
window.addEventListener ('scroll', mostrarScrollDos);

let animadoBotonTrafico = document.querySelector('.divBotonTrafico');
let mostrarScrollBotonTrafico = () => {
let scrollTopBotonTrafico = document.documentElement.scrollTop;
let alturaAnimadoBotonTrafico = animadoBotonTrafico.offsetTop;
if (alturaAnimadoBotonTrafico - 600 < scrollTopBotonTrafico) {
animadoBotonTrafico.style.opacity = 1;
animadoBotonTrafico.classList.add('mostrarCards');
}
}
window.addEventListener ('scroll', mostrarScrollBotonTrafico);

let animadoBotonSitio = document.querySelector('.divBotonSitio');
let mostrarScrollBotonSitio = () => {
let scrollTopBotonSitio = document.documentElement.scrollTop;
let alturaAnimadoBotonSitio = animadoBotonSitio.offsetTop;
if (alturaAnimadoBotonSitio - 500 < scrollTopBotonSitio) {
animadoBotonSitio.style.opacity = 1;
animadoBotonSitio.classList.add('mostrarCards');
}
}
window.addEventListener ('scroll', mostrarScrollBotonSitio);

let animadoTituloAdn = document.querySelector('.seccionAdn');
let mostrarScrollTituloAdn = () => {
let scrollTopTituloAdn = document.documentElement.scrollTop;
let alturaAnimadoTituloAdn = animadoTituloAdn.offsetTop;
if (alturaAnimadoTituloAdn - 600 < scrollTopTituloAdn) {
animadoTituloAdn.style.opacity = 1;
animadoTituloAdn.classList.add('mostrarCards');
}
}
window.addEventListener ('scroll', mostrarScrollTituloAdn);

let animadoSeccionAdn= document.querySelector('.divSeccionAdn');
let mostrarScrollSeccionAdn = () => {
let scrollTopSeccionAdn = document.documentElement.scrollTop;
let alturaAnimadoSeccionAdn = animadoSeccionAdn.offsetTop;
if (alturaAnimadoSeccionAdn - 500 < scrollTopSeccionAdn) {
animadoSeccionAdn.style.opacity = 1;
animadoSeccionAdn.classList.add('mostrarCards');
}
}
window.addEventListener ('scroll', mostrarScrollSeccionAdn);

let animadoSeccionAdn2= document.querySelector('.divSeccionAdn2');
let mostrarScrollSeccionAdn2 = () => {
let scrollTopSeccionAdn2 = document.documentElement.scrollTop;
let alturaAnimadoSeccionAdn2 = animadoSeccionAdn2.offsetTop;
if (alturaAnimadoSeccionAdn2 - 500 < scrollTopSeccionAdn2) {
animadoSeccionAdn2.style.opacity = 1;
animadoSeccionAdn2.classList.add('mostrarCards');
}
}
window.addEventListener ('scroll', mostrarScrollSeccionAdn2);

let animadoTituloQuienes= document.querySelector('.seccionQuienes');
let mostrarScrollTituloQuienes = () => {
let scrollTopTituloQuienes = document.documentElement.scrollTop;
let alturaAnimadoTituloQuienes = animadoTituloQuienes.offsetTop;
if (alturaAnimadoTituloQuienes - 500 < scrollTopTituloQuienes) {
animadoTituloQuienes.style.opacity = 1;
animadoTituloQuienes.classList.add('mostrarCards');
}
}
window.addEventListener ('scroll', mostrarScrollTituloQuienes);

let animadoSeccionQuienes= document.querySelector('.textoQuienes');
let mostrarScrollSeccionQuienes = () => {
let scrollTopSeccionQuienes = document.documentElement.scrollTop;
let alturaAnimadoSeccionQuienes = animadoSeccionQuienes.offsetTop;
if (alturaAnimadoSeccionQuienes - 500 < scrollTopSeccionQuienes) {
animadoSeccionQuienes.style.opacity = 1;
animadoSeccionQuienes.classList.add('mostrarCards');
}
}
window.addEventListener ('scroll', mostrarScrollSeccionQuienes);

let botonResponsive = document.querySelector('.botonResponsive')
let ulNavResponsive = document.querySelector('.ulNav')
let barrasResponsive = document.querySelectorAll('.botonResponsive span')

botonResponsive.addEventListener('click', () => {
    ulNavResponsive.classList.toggle('activado')
    barrasResponsive.forEach (barra => {barra.classList.toggle('animado')})
})