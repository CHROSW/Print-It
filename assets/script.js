const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


var nbDots= slides.length;
var elementDots = document.getElementsByClassName('dots');
var fragment = new DocumentFragment();
for( var i=0; i < nbDots ; i++){
	var dot = document.createElement("div");
	if(i==0){
		dot.className = "dot dot_selected";
	}else{
		dot.className = "dot";
	}
	fragment.append(dot);
}
elementDots[0].append(fragment);

var elementLeft = document.getElementById('slider-arrow-left');
elementLeft.addEventListener("click", (e) => {
switch(e.button){
	case 0 : console.log("Left Click");
			 var listDot = document.getElementsByClassName('dot');
			 var j=0;
			 for(elements in listDot){
				
				if(listDot[elements].className == 'dot dot_selected'){ var nb=j}
				j=j+1;
			 };
			 listDot[nb].className = 'dot';
			 listDot[nb-1].className = 'dot dot_selected';
			 var image = document.getElementsByClassName('banner-img');
			 image[0].setAttribute('src', './assets/images/slideshow/' + slides[nb-1]['image']);
	break;
	case 2 : console.log("Right Click");
	break;
}
}, false);

var elementRight = document.getElementById('slider-arrow-right');
elementRight.addEventListener("click", (e) => {
switch(e.button){
	case 0 : console.log("Left Click");
			 var listDot = document.getElementsByClassName('dot');
			 var j=0;
			 for(elements in listDot){
				
				if(listDot[elements].className == 'dot dot_selected'){ var nb=j}
				j=j+1;
			 };
			 listDot[nb].className = 'dot';
			 listDot[nb+1].className = 'dot dot_selected';
			 var image = document.getElementsByClassName('banner-img');
			 image[0].setAttribute('src', './assets/images/slideshow/' + slides[nb+1]['image']);
	break;
	case 2 : console.log("Right Click");
	break;
}
}, false);