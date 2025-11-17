// Pequenos comportamentos: toggle nav e glitch toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
navToggle && navToggle.addEventListener('click', () => {
siteNav.classList.toggle('active');
});


// optional: add clickable glitch effect
const glitch = document.getElementById('glitch');
if(glitch){
glitch.addEventListener('click', ()=>{
glitch.classList.add('temp-glitch');
setTimeout(()=> glitch.classList.remove('temp-glitch'), 800);
});
}
