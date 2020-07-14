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

const navbar = document.getElementById('navbar__list');
const sections = document.getElementsByTagName('section');


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
	for (var i=0; i<sections.length; i++){
		let section = document.createElement('li');
		let a = document.createElement('a');
		section.setAttribute('class', 'menu__link');
		section.setAttribute('id', sections[i].id);
		section.dataset.nav = sections[i].id;
		section.innerText = sections[i].dataset.nav;
		a.setAttribute('href', "#"+ sections[i].id);
		navbar.appendChild(section);
		section.appendChild(a);
	}
}

// Add class 'active' to section when near top of viewport


function makeSectionActive() {

	for (i of sections){
		var id = i.id;
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


// Scroll to anchor ID using scrollTO event
	

function scrollToSection(event){
	navbar.addEventListener('click', function(e){
		var section = document.querySelector('#' + e.target.dataset.nav);
		section.scrollIntoView({
			behavior:'smooth'}
			);
		});
	}


                                       
// Build menu 

window.addEventListener('load', function() {
	navBuild();
});

//Style menu

const list = document.getElementsByTagName('li');
for (i of list){
    i.style.cssText = "display:inline-block; float:right";
};




// Scroll to section on link click


window.addEventListener("click", function(event){
	scrollToSection(event);	
})


// Set sections as active

window.addEventListener("scroll", function(){
	makeSectionActive();
});

