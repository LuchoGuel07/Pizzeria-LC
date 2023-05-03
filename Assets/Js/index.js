/*==================== Mostrar menú ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Verificar si la variable existe
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{/* `nav.classList.toggle('show-menu')` está alternando la
        clase `show-menu` en el elemento `nav`. Esta clase se
        usa para mostrar u ocultar el menú en pantallas más
        pequeñas cuando se hace clic en el botón de alternar.
        Si la clase `show-menu` está presente, se muestra el
        menú, y si no está presente, el menú se oculta. El
        método `toggle()` agrega la clase si no está presente
        y la elimina si está presente, alternando
        efectivamente la visibilidad del menú. */
        
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav__toggle','nav__menu')

/*==================== REMOVER MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

/**
 * La función elimina la clase 'show-menu' del elemento con el ID 'nav__menu'.
 */
function linkAction(){
    const navMenu = document.getElementById('nav__menu')
    navMenu.classList.remove('show-menu')
}
/* `navLink.forEach(n => n.addEventListener('click', linkAction))` agrega un detector de eventos de
clic a cada elemento con la clase `nav__link`. Cuando se hace clic en uno de estos elementos, se
llama a la función `linkAction`, que elimina la clase `show-menu` del elemento con el ID
`nav__menu`. Esto asegura que el menú móvil esté oculto cuando se hace clic en un enlace. */
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    /* Este código agrega o elimina la clase 'enlace activo' a los enlaces de navegación en el menú
    según la sección de la página que se está viendo actualmente. Lo hace recorriendo todas las
    secciones de la página y verificando si la posición de desplazamiento actual está dentro de los
    límites de cada sección. Si lo es, agrega la clase 'active-link' al enlace de navegación
    correspondiente, y si no lo es, elimina la clase. Esto crea un indicador visual para el usuario
    de qué sección está viendo actualmente en la página. */
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
/* `window.addEventListener('scroll', scrollActive)` agrega un detector de eventos al objeto de ventana
que escucha el evento 'scroll'. Cuando el usuario se desplaza por la página, se llama a la función
`scrollActive`, que verifica qué sección de la página está actualmente a la vista y agrega la clase
'active-link' al enlace de navegación correspondiente. Esto crea un indicador visual para el usuario
de qué sección está viendo actualmente en la página. */
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
/**
 * La función agrega o elimina una clase del elemento de encabezado según la posición de desplazamiento
 * del usuario.
 */
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'


/* Este bloque de código verifica si hay un tema previamente seleccionado almacenado en el
almacenamiento local. Si lo hay, establece el tema y el icono a los previamente seleccionados. De lo
contrario, establece el tema y el icono predeterminados. */
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}


/* Este código agrega un detector de eventos al elemento `themeButton` que escucha un evento de clic.
Cuando se hace clic en el botón, alterna la clase `darkTheme` en el elemento `body` y alterna la
clase `iconTheme` en el elemento `themeButton`. También establece el tema y el icono actuales en el
almacenamiento local usando `localStorage.setItem()`. Las funciones `getCurrentTheme()` y
`getCurrentIcon()` se utilizan para obtener el tema y el icono actual en función de la presencia de
las clases `darkTheme` e `iconTheme`. */
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
/* `const sr = ScrollReveal({...})` está inicializando la biblioteca ScrollReveal con un objeto de
configuración que especifica las propiedades de animación para los elementos que se revelarán en el
desplazamiento. */
const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 2000,
    reset: true
});

/* `sr.reveal()` es un método de la biblioteca ScrollReveal que se usa para animar elementos a medida
que se vuelven visibles en la pantalla durante el desplazamiento. */
sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})