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
			 if(nb-1 < 0){
				listDot[nb].className = 'dot';
			 	listDot[nbDots-1].className = 'dot dot_selected';
			 	var image = document.getElementsByClassName('banner-img');
				var blocSlider = document.getElementById('banner');
				var paragraphe = blocSlider.getElementsByTagName('p');
				var pspan = document.createElement('span');
				image[0].setAttribute('src', './assets/images/slideshow/' + slides[nbDots-1]['image']);
				paragraphe[0].innerText = slides[nbDots-1]['tagLine'].substring(0, slides[nbDots-1]['tagLine'].indexOf('<'));
				pspan.innerText = slides[nbDots-1]['tagLine'].substring(slides[nbDots-1]['tagLine'].indexOf('<span>')+6, slides[nbDots-1]['tagLine'].indexOf('</span>'));
				paragraphe[0].appendChild(pspan);
			 }else{
			 	listDot[nb].className = 'dot';
			 	listDot[nb-1].className = 'dot dot_selected';
			 	var image = document.getElementsByClassName('banner-img');
				var blocSlider = document.getElementById('banner');
				var paragraphe = blocSlider.getElementsByTagName('p');
				var pspan = document.createElement('span');
			 	image[0].setAttribute('src', './assets/images/slideshow/' + slides[nb-1]['image']);
				paragraphe[0].innerText = slides[nb-1]['tagLine'].substring(0, slides[nb-1]['tagLine'].indexOf('<'));
				pspan.innerText = slides[nb-1]['tagLine'].substring(slides[nb-1]['tagLine'].indexOf('<span>')+6, slides[nb-1]['tagLine'].indexOf('</span>'));
				paragraphe[0].appendChild(pspan);
			 }
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
			 if(nb+1 == nbDots){
				listDot[nb].className = 'dot';
			 	listDot[0].className = 'dot dot_selected';
			 	var image = document.getElementsByClassName('banner-img');
				var blocSlider = document.getElementById('banner');
				var paragraphe = blocSlider.getElementsByTagName('p');
				var pspan = document.createElement('span');
				console.log(paragraphe);
				image[0].setAttribute('src', './assets/images/slideshow/' + slides[0]['image']);
				paragraphe[0].innerText = slides[0]['tagLine'].substring(0, slides[0]['tagLine'].indexOf('<'));
				pspan.innerText = slides[0]['tagLine'].substring(slides[0]['tagLine'].indexOf('<span>')+6, slides[0]['tagLine'].indexOf('</span>'));
				paragraphe[0].appendChild(pspan);
			 }else{
			 	listDot[nb].className = 'dot';
			 	listDot[nb+1].className = 'dot dot_selected';
			 	var image = document.getElementsByClassName('banner-img');
				var blocSlider = document.getElementById('banner');
				var paragraphe = blocSlider.getElementsByTagName('p');
				var pspan = document.createElement('span');
				console.log(paragraphe);
			 	image[0].setAttribute('src', './assets/images/slideshow/' + slides[nb+1]['image']);
				paragraphe[0].innerText = slides[nb+1]['tagLine'].substring(0, slides[nb+1]['tagLine'].indexOf('<'));
				pspan.innerText = slides[nb+1]['tagLine'].substring(slides[nb+1]['tagLine'].indexOf('<span>')+6, slides[nb+1]['tagLine'].indexOf('</span>'));
				paragraphe[0].appendChild(pspan);
			 }
	break;
	case 2 : console.log("Right Click");
	break;
}
}, false);