const menuBtn = document.querySelector('#nav-icon1');
const menuSlide = document.querySelector('.nav-menu');
const burgerLineOne = document.querySelector('.nav-burger__line1');
const burgerLineTwo = document.querySelector('.nav-burger__line2');
const burgerLineThree = document.querySelector('.nav-burger__line3');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuSlide.classList.add('open');
        // burgerLineOne.classList.add('move');
        // burgerLineTwo.classList.add('move');
        // burgerLineThree.classList.add('move');
        menuOpen = true;
    }
    else{
        menuSlide.classList.remove('open');
        // burgerLineOne.classList.add('move');
        // burgerLineTwo.classList.add('move');
        // burgerLineThree.classList.add('move');
        menuOpen = false;
    }
});  

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});
