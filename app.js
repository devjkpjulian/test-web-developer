var images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: 'img/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: 'img/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: 'img/beast.jpg'
	}
};

function toggleElem(paramID)
{
	document.getElementById(paramID).classList.toggle('hidden');
	document.getElementById(paramID).classList.toggle('block');
}

function imgCreate(){

	Object.keys(images).forEach(function(key) {

		// Initial Div
		var div0 = document.createElement("DIV");
		div0.classList.add("h-40","lg:h-48","w-full","lg:w-80","pro:w-64","border","border-[#22b3e4]","bg-top","bg-cover");
		div0.style.backgroundImage = 'url('+images[key].path+')';

		div0.onmouseover = function() {
			toggleElem(key);
		}

		div0.onmouseout = function() {
			toggleElem(key);
		}

		// Added this for Mobile View
		div0.onfocus = function() {
			toggleElem(key);
		}

		// Hover Div
		var div1 = document.createElement("DIV");
		div1.setAttribute("id", key);
		div1.classList.add("bg-[#077ba3]","bg-opacity-60","h-full","w-full","flex","flex-col","items-center","justify-center","hidden");

		// Heading
		var title = document.createElement("H1");
		title.classList.add("text-white","uppercase","text-lg","font-semibold");
		title.textContent = images[key].heading;

		// Description
		var desc = document.createElement("P");
		desc.classList.add("text-white","capitalize","text-md","font-light");
		desc.textContent = images[key].description;

		// Update Values
		div0.appendChild(div1);
		div1.appendChild(title);
		div1.appendChild(desc);
		document.getElementById('imgcontent').appendChild(div0);

	});

}