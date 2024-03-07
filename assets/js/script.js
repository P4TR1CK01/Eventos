//añadido de forma dinamica// 
// vamos a añadir dinámicamente una etiqueta H2 al container
// Acá definimos nuestra función
function add_dinamicamente () {
  $('.container').append(
    '<h2 class="subtitulo">Esta etiqueta fué añadida dinámicamente</h2>'
  )
  $('.container').append(
    '<h3 class="titulito">A mi también me añadieron</h3>'
  )
  $('.subtitulo').css('color', '#CCC')
  $('.titulito').css('text-decoration', 'underline')
}
// Acá ejecutamos la función
add_dinamicamente();

// creamos una función para cambiar de color el H1
function  cambiar_h1() {
  $('h1').toggleClass('text-danger')
}

// creamos una función para cambiar de color el H1
function  cambiar_h1() {
  $('h1').toggleClass('text-danger')
}
// ahora unimos el evento "dblclick" a la función cambiar_h1
$('h1').on('dblclick', cambiar_h1)

// Forma compacta
/*
$('h1').on('dblclick', function  () {
  $('h1').toggleClass('text-danger')
})
*/

// Iniciamos el caorusel de Bootstrap
const carousel = new bootstrap.Carousel('.carousel')

