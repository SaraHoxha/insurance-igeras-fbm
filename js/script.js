		
document.getElementById('ageRange').addEventListener('input', function() {
	document.getElementById('selectedAge').textContent = this.value;
  });

function calculateInsurance() {
	
	var age = document.getElementById('ageRange').value;
	var package = document.getElementById('insurancePackage').value;
		var monthlyPayment = 0;

		if (!package) { 
			document.getElementById('result').innerText = 'Please select an insurance package.';
		}

		if (age >= 70 && age <= 74) {
				switch (package) {
					case 'bronze':
						monthlyPayment = 50;
						break;
					case 'silver':
						monthlyPayment = 125;
						break;
					case 'gold':
						monthlyPayment = 210;
						break;
				}			
			}
			else if (age >= 75 && age <= 79) {
				switch (package) {
					case 'bronze':
						monthlyPayment = 65;
						break;
					case 'silver':
						monthlyPayment = 160;
						break;
					case 'gold':
						monthlyPayment = 270;
						break;
				}
			}
			else if (age >= 80 && age <= 84) {
					switch (package) {
						case 'bronze':
							monthlyPayment = 90;
							break;
						case 'silver':
							monthlyPayment = 225;
							break;
						case 'gold':
							monthlyPayment = 375;
							break;
					}
		}

		var paragraph = document.getElementById("outputparagraph");
		paragraph.innerText = 'Monthly payment: €' + monthlyPayment;
	
		if(paragraph.classList.contains("hidden")) {
		
		paragraph.classList.toggle("hidden")
		}
	var button = document.getElementById("finalizebutton");
	button.disabled=false;
	
	if(button.classList.contains("hidden")) {
		showAcquire();
	}
}
	

  function showAcquire() {
	var div = document.getElementById('paragraph-container');

	var button = document.getElementById("finalizebutton");
	button.disabled=false;

	button.classList.toggle("hidden")
	div.style.marginTop = '100px';

  }

  function toggleAdditionalFields() {
	
	var otherfields = document.getElementById("otherfields");
	otherfields.classList.toggle("hidden");

	var backbutton = document.getElementById("backbutton");
	backbutton.classList.toggle("hidden");

	var calculatebutton = document.getElementById("calculatebutton");
	calculatebutton.classList.add("hidden");

	var p2 = document.getElementById("askforfinalization");
	p2.classList.toggle("hidden");

	var button = document.getElementById("finalizebutton");
	button.classList.toggle('hidden');

	
	var originalPointerEvents = calculatebutton.style.pointerEvents;
	calculatebutton.style.pointerEvents = 'none';
	if (calculatebutton.style.pointerEvents == 'none') {
    calculatebutton.style.pointerEvents = originalPointerEvents;
}

  }

function goBack() {
	var calculatebutton = document.getElementById("calculatebutton");
	calculatebutton.classList.toggle("hidden");
	var otherfields = document.getElementById("otherfields");
	otherfields.classList.toggle("hidden");
	var p2 = document.getElementById("askforfinalization");
	p2.classList.toggle("hidden");
	var button = document.getElementById("finalizebutton");
	if(!button.classList.contains("hidden")){
	button.classList.add("hidden")
	}
	var backbutton = document.getElementById("backbutton");
	backbutton.classList.toggle("hidden");
	var paragraph = document.getElementById("outputparagraph");
	paragraph.classList.toggle("hidden")

}
function readText(sectionId) {
	var section = document.getElementById(sectionId);
	var text = getTextContent(section);

	var utterance = new SpeechSynthesisUtterance(text);

	
	var voices = speechSynthesis.getVoices();
	utterance.voice = voices.find(voice => voice.lang === 'en-US');
	utterance.rate = 0.4;
	utterance.pitch = 1; 
	utterance.volume = 1.0; 
	

	speechSynthesis.speak(utterance);
  }

  function getTextContent(element) {
	return element.innerText || element.textContent;
  }

function sendData() {
	var inputValues = [];
	var name = document.getElementById('name').value;
	var tessera = document.getElementById('tessera').value;
	var email = document.getElementById('email').value;
	var number = document.getElementById('number').value;
	var address = document.getElementById('addressField').value;

	inputValues.push(name);
	inputValues.push(tessera);
	inputValues.push(address);
	inputValues.push(number);
	inputValues.push(email);

  	var allFilled = true;

  inputValues.forEach(function(value) {
    if (value.trim() === '') {
      allFilled = false;
	  return;
    }
  });

  if (!allFilled) {
    alert('Please fill all the fields before submitting the form.');
    return false;
  }
	alert('Thank you for your trust.\n One of our agents will be in touch with you shortly.');
	return true;
  }