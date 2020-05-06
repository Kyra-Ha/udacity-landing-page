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
const sections = document.getElementsByTagName('section');
const nav__menu = document.querySelectorAll('nav');



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
	for (var i=0; i<sections.length; i++){
	    var id = sections[i].id;
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
		var id = i.id;
		if (isInViewPort(i) ==true){
			i.classList.add('your-active-class');
			document.getElementById(id).classList.add('active');
			console.log("link and section are active");}
		else{
			i.classList.remove('your-active-class');
			document.getElementById(id).classList.remove('active');
			console.log("link and section not active");
			}
	}
}


		
	







// Scroll to anchor ID using scrollTO event

function scrollToSection() {
	const links= document.querySelectorAll("a");
	for (section of sections){
		var position = section.getBoundingClientRect();
		var sectionId = section.getAttribute('id')
		console.log(sectionId);
		for (link of links){
			var linkId = link.getAttribute('id');
			link.addEventListener("click", function(e){
				e.preventDefault();
				if (sectionId == linkId){
					window.scrollTo(position);
		}
	});
	};
};
}


	

function scrollToSection(){
	const links= document.querySelectorAll("a");
	for (link of links){
	    var href = i.getAttribute('href');
	    i.addEventListener("click", function(e){
	        e.preventDefault();
	        var section = document.getElementById(href);
	        console.log(section);
	    });
	}
}



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

menu = navBuild()

document.querySelector('.menu__link').style.display='inline-block';


// Scroll to section on link click


window.addEventListener("click", function(){
	scrollToSection()
});

// Set sections as active
window.addEventListener("scroll", function(){
	makeSectionActive();
	console.log("scrolling");
});


