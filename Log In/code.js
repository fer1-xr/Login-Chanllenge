//VARIABLES
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form= document.getElementById('form')






//Validation Name
function validationName(){
    if(firstname.value.length<5){
     firstname.style.border="1px solid red";
     if(lastname.value.length<5){
      lastname.style.border="1px solid red"
     };
     if(email.value.length<5){
      email.style.border="1px solid red"
    };
    if(password.value.length<5){
      password.style.border="1px solid red"
     };

    }
     
    else{
      firstname.style.borderColor="  #41E706"   
      lastname.style.borderColor=" #41E706" 
      email.style.borderColor=" #41E706" 
      password.style.borderColor=" #41E706" 
    }
}


form.addEventListener('submit',  e=>{
    e.preventDefault()
    validationName()
   
    })