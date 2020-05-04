/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const ul = document.querySelector('ul');
const section = document.getElementsByTagName('section');
const menuLink= document.getElementsByClassName("menu__link")
const nav__menu = document.getElementsByTagName('nav');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInView(elem) {
	var view = elem.getBoundingClientRect();
    return (
        view.top >= 0 &&
        view.left >= 0 &&
        view.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        view.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};





/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function navBuild() {
	for (var i=0; i<section.length; i++){
	    var id = section[i].id;
	    var list = document.createElement('li');
	    var anchor = document.createElement('a');
	    ul.appendChild(list);
	    var href = anchor.setAttribute('href', "#" + id);
	    list.setAttribute('class', "menu__link");
	    textnode = document.createTextNode(id);
	    list.appendChild(anchor);
	    anchor.appendChild(textnode);
	    list.setAttribute('id', id);
	}
}

// Add class 'active' to section when near top of viewport

function makeActive() {
	for (var i of section){
		var id = i.id
		if (isInView()==true) {
			i.classList.add('your-active-class');
			menulink[id].add('active');
		}
		else{
			i.classList.remove('your-active-class');
			menuLink[id].remove('active');
		}
	}
}



	






// Scroll to anchor ID using scrollTO event

function scrollToSection() {

			




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

menu = navBuild(nav__menu)


// Scroll to section on link click


window.addEventListener("click", scrollToSection());

// Set sections as active
window.addEventListener('scroll', makeActive());


