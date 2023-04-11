
// Global Const
const htmlEl = document.querySelector(`html`)

// DarkMode Const
const darkModeBtn = document.querySelector(`#btn-dark-mode`);

// Menu Const
const burger = document.querySelector(`#burger`)
const menuEl = document.querySelector(`.menu`);


// DarkMode Function
function darkMode() { 
    if(!htmlEl.classList.contains(`dark-mode`)){
        htmlEl.classList.add(`dark-mode`);
    } else {
        htmlEl.classList.remove(`dark-mode`);
    }
 }

// Menu Function
function menuToggle(){
    if(!menuEl.classList.contains(`menu-active`)) {
        menuEl.classList.add(`menu-active`);
        htmlEl.classList.add(`hide`);
        gsap.to(`.line1`,1, {rotate: `45`, y: 5});
        gsap.to(`.line2`,1, {rotate: `-45`, y: -5});
        gsap.to(`.menu`, 2, {clipPath: `circle(1500px at 100% -10%)`});
        
    } else {
        menuEl.classList.remove(`menu-active`);
        htmlEl.classList.remove(`hide`);
        gsap.to(`.line1`,1, {rotate: `0`, y: 0});
        gsap.to(`.line2`,1, {rotate: `0`, y: 0});
        gsap.to(`.menu`, 1, {clipPath: `circle(10px at 100% -10px)`});
    }
}


// EventListeners
darkModeBtn.addEventListener(`click`, darkMode);
burger.addEventListener(`click`, menuToggle);