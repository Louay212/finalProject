window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});
function toggleMenu(){
    const menuToogle = document.querySelector(".menuToggle")
    const navigationS = document.querySelector(".navigation")
    menuToogle.classList.toggle('active')
    navigationS.classList.toggle('active')
}