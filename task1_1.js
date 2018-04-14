var form = document.createElement('form');
form.name = 'login';
form.action = 'google.com';
var body = document.body;
body.appendChild(form);
var inputAge = document.createElement('input');
inputAge.type = 'text';
inputAge.name = 'age';
inputAge.placeholder = 'Name';
form.appendChild(inputAge);
var inputUsername = document.createElement('input');
inputUsername.type = 'text';
inputUsername.name = 'username';
inputUsername.placeholder = 'Username';
form.appendChild(inputUsername);
var inputDate = document.createElement('input');
inputDate.type = 'text';
inputDate.name = 'date';
inputDate.placeholder = 'Enter Date';
form.appendChild(inputDate);
var inputSubmit = document.createElement('input');
inputSubmit.type = 'button';
inputSubmit.value = 'Validate Me';
form.appendChild(inputSubmit);

//inputSubmit.addEventListener('click', validateAge);
//inputSubmit.addEventListener('click', validateUsername);
//inputSubmit.addEventListener('click', validateDate);
inputSubmit.addEventListener('click', validate);
//inputAge.addEventListener('blur', validateAge);

function validateAge() {
	var flag = 'true';
	var inpAge = document.querySelector('input[name=age]').value;
	if ((isNaN(inpAge)) || (Number(inpAge) < 0) || (inpAge.indexOf(' ') !== -1) || (inpAge.indexOf('e') !== -1)) {
		inputAge.setAttribute('class','wrong');
		flag = false;
		return alert('You passed incorrect data to "Name"');
	}	
	inputAge.setAttribute('class','right');
	return flag;
}

function validateUsername() {
	var flag = 'true';
	var inpUsername = document.querySelector('input[name=username]').value;
	if (inpUsername.indexOf('user_') !== 0) {
		flag = false;
		return alert('You passed incorrect data to "Username"');
	}	
	return flag;
}

function validateDate() {
	var flag;
	var inpDate = document.querySelector('input[name=date]').value;
	var date = new Date();
	var error = 'Your data is invalid';
	if ((inpDate.indexOf(' ') !== -1) || (+inpDate.slice(0,2) !== date.getDate()) || (inpDate.slice(2,3) !== '/') || (+inpDate.slice(3,5) !== (date.getMonth() + 1)) ||
	(inpDate.slice(5,6) !== '/') || (+inpDate.slice(6,10) !== date.getFullYear())) {
			flag = false;
			return alert('You passed incorrect data to "Username"');
	}			
}

function validate() {
	var flag = true;
	var arrayError=[];
	// Checking Block for field "Name"
	var inpAge = document.querySelector('input[name=age]').value;
	if ((isNaN(inpAge)) || (Number(inpAge) < 0) || (inpAge.indexOf(' ') !== -1) || (inpAge.indexOf('e') !== -1)) {
		flag = false;
		inputAge.setAttribute('class','wrong');
		arrayError.push('You passed incorrect data to "Name"'); //Push message with wrong data in array
	}
	else {	
		inputAge.setAttribute('class','right');
	}	
	// End of block--------------------------------------------------
	// Checking Block for field "Username"
	var inpUsername = document.querySelector('input[name=username]').value;
	if (inpUsername.indexOf('user_') !== 0) {
		flag = false;
		inputUsername.setAttribute('class','wrong');
		arrayError.push('You passed incorrect data to "Username"');
	}
	else {
		inputUsername.setAttribute('class','right');
	}	
	// End of block--------------------------------------------------
	// Checking Block for field "Date"
	var inpDate = document.querySelector('input[name=date]').value;
	var date = new Date();
	if ((inpDate.indexOf(' ') !== -1) || (+inpDate.slice(0,2) !== date.getDate()) || (inpDate.slice(2,3) !== '/') || (+inpDate.slice(3,5) !== (date.getMonth() + 1)) ||
	(inpDate.slice(5,6) !== '/') || (+inpDate.slice(6,10) !== date.getFullYear())) {
		flag = false;
		inputDate.setAttribute('class','wrong');
		arrayError.push('You passed incorrect data to "Date"');
	}		
	else {
		inputDate.setAttribute('class','right');
	}
	// End of block--------------------------------------------------
	// Output error messages
	if (arrayError.length > 0) {
		for (let i = 0; i < arrayError.length; i++) {
			alert(arrayError[i]);
		}
	}
	return flag;
}

