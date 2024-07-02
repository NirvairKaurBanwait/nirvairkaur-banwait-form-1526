// Accessing active html elements
let btn = document.getElementById('button');
let fname = document.getElementById('fullname');
let email = document.getElementById('email');
let mess = document.getElementById('message');

// Regular expression to validate email 
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ ; 

// Event handler to validate form
function formValidation(event){
  event.preventDefault();

  // Empty buckets for user inputs and errors
  let data = {}; 
  let errors = {}; 

  // To ensure user entries have no whitespaces
  fname.value = fname.value.trim();
  email.value = email.value.trim();
  mess.value = mess.value.trim();

  //Validating full name
  if(fname.value){
    data.fullname = fname.value;
  } else {
    errors.fn = 'Full name is missing';
  }

  //Validating email
  if(email.value){
    if(pattern.test(email.value)){
      data.email = email.value;
    } else{
      errors.em = 'Email is invalid';
    }
  } else{
    errors.em = 'Email is missing';
  }

  //Validating message
  if(mess.value){
    data.message = mess.value;
  } else {
    errors.msg = 'Message is missing';
  }

  if(Object.keys(errors).length === 0){
    console.log(data);
    fname.value = '';
    email.value = '';
    mess.value = '';
  } else {
    console.log(errors);
  }
}

btn.addEventListener('click', formValidation);
