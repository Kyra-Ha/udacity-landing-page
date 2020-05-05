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
const list_item= document.getElementsByTagName("li")
const nav__menu = document.getElementsByTagName('nav');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewPort(elem) {
	var bounding = elem.getBoundingClientRect();
	return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
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


function makeSectionActive() {
	for (i of section){
	
		if (isInViewPort(i) ==true){
			i.classList.add('your-active-class');
			console.log("section is active");
			}
		else{
			i.classList.remove('your-active-class');
			console.log("section not active");
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

menu = navBuild()



// Scroll to section on link click


window.addEventListener("click", scrollToSection());

// Set sections as active
window.addEventListener("scroll", makeActive());


