const tabs =document.querySelectorAll('[data-tab-target]')
const tabContents =document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab=> {
    tab.addEventListener('click',()=>{
      const target= document.querySelector (tab.dataset.tabTarget )
      tabContents .forEach(tabContent =>{
        tabContent.classList.remove('active')
    })
      target.classList.add('active')
    })
})


let property = document.querySelector('#properties');
let list = document.querySelector('.list');
property.addEventListener('click',()=>{
 list.classList.toggle('newlist');
});
// let login = document.querySelector('#login');
// let login2= document.querySelector('.login');
// property.addEventListener('click',()=>{
//   login2.classList.toggle('newLogin');
// });

let about = document.querySelector('#about');
let list2 = document.querySelector('.list2');
about.addEventListener('click',()=>{
  list2.classList.toggle('newlist2');
})

let sellers = document.querySelector('#sellers');
let list1 = document.querySelector('.list1');
sellers.addEventListener('click',()=>{
  list1.classList.toggle('newlist1');
})

let contacts = document.querySelector('#contacts');
let contant = document.querySelector('.Contact');
contacts.addEventListener('click',()=>{
  contant.classList.toggle('newContact')
})

function setFormMessage(formElement,type,message) {
  const messageElement = formElement.querySelector('.form__message');

  messageElement.textContent = message;
  messageElement.classList.remove('form__message-success','form__message-error');
  messageElement.classList.add(`form__message--${type}`);
}

// setFormMessage(loginForm,'success',"You've successfully logged in");

function setInputError(inputElement,message) {
  inputElement.classList.add('form__input-error');
  inputElement.parentElement.querySelector('form__input-error-message').textContent = message;
}

document.addEventListener('DOMContentLoaded',() => {
const loginForm = document.querySelector('#login');
const createAccountForm = document.querySelector('#createAccount')
const imagecontainer = document.querySelector('#imagecontainer');
const buttons = document.querySelector('#buttons')
document.getElementById('button4').addEventListener('click',() => {
  
})
buttons.addEventListener('click',() => {
  console.log(prompt('Input your name to continue'))
})
document.querySelector('#button4').addEventListener('click', (e) => {
  // e.preventDefault();
 
  imagecontainer.classList.remove('imagecontainer');
});
// document.querySelector('#linkLogin').addEventListener('click', (e) => {
//   e.preventDefault();
//   loginForm.classList.remove('form--hidden');
//   createAccountForm.classList.add('form--hidden');
// });

loginForm.addEventListener('submit',e => {
  e.preventDefault()
  setFormMessage(loginForm, 'error', 'Invalid username/password')
})
document.querySelectorAll('form__input')
.forEach(inputElement =>{
  inputElement.addEventListener('blur',(e) => {
    if(e.target ==="signupUsername" && e.target.value.length > 0 && e.target.value.length
     < 10) {
      setInputError(inputElement,'Username must be atleast 10 characters');
     }
  })
})
});

