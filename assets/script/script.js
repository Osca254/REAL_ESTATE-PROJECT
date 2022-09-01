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

document.addEventListener('DOMContentLoaded',() => {
const loginForm = document.querySelector('#login');
const createAccountForm = document.querySelector('#createAccount')

document.querySelector('#linkCreateAccount').addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.classList.add('form--hidden');
  createAccountForm.classList.remove('form--hidden');
});
document.querySelector('#linkLogin').addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.classList.remove('form--hidden');
  createAccountForm.classList.add('form--hidden');
});

});