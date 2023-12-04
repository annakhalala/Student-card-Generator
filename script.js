function generateCard() {
    const program = document.getElementById('program').value;
    const year = document.getElementById('year').value;
    const name = document.getElementById('name').value;
    const studentNumber = document.getElementById('studentNumber').value;
    const photoInput = document.getElementById('photo');

    const cartoon = document.getElementById('cartoon');
    const cardInfo = document.getElementById('cardInfo');
    const studentCard = document.getElementById('studentCard');
	
	  
    cartoon.style.backgroundImage = photoInput.files[0] ? `url('${URL.createObjectURL(photoInput.files[0])}')` : "url('placeholder.jpg')";
    cardInfo.innerHTML = `<h2>${name}</h2><p>${program} - Year ${year}</p><p>Student ID: ${studentNumber}</p>`;

    
    studentCard.classList.remove('hidden');
}