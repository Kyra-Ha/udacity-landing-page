/**
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 Global Variables
 * 
*/
let sections = document.getElementsByTagName("section");

//Checks if section is in viewport
function isInViewPort(elem) {
	var bounding = elem.getBoundingClientRect();
	return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};





// build the nav
function navBuild() {
	for (let i=0; i<sections.length; i++){
		let navbar = document.getElementById("navbar__list");
		let nav_section = document.createElement('li');
		let a = document.createElement('a');
		a.setAttribute('href', "#"+ sections[i].id);
		nav_section.setAttribute('class', 'menu__link');
		nav_section.dataset.nav = sections[i].id;
		navbar.appendChild(nav_section);
		nav_section.appendChild(a).innerText=sections[i].dataset.nav;
		
	}
}

// Add class 'active' to section when near top of viewport


function makeSectionActive() {

	for (i of sections){
		let id = i.id;
		if (isInViewPort(i) ==true){
			i.classList.add('your-active-class');
			document.querySelector('#' + id).classList.add('active');
			}
		else{
			i.classList.remove('your-active-class');
			document.querySelector('#' + id).classList.remove('active');
			}
	}
}



                                       
// Build menu 

window.addEventListener('load', function() {
	navBuild();
});


// Set sections as active

window.addEventListener("scroll", function(){
	makeSectionActive();
});

