// vars
const menu = document.getElementById('bars');
const nav = document.querySelector('.nav');
const searchIcon = document.querySelector('#search-icon');
const searchPanel = document.querySelector('.search');

// navbar
menu.onclick = () => {
  menu.classList.toggle('fa-times');
  nav.classList.toggle('active');
}

// search
searchIcon.onclick = () =>{
  searchPanel.classList.toggle('active');
}

let times = document.querySelector('.fa-times');
times.onclick = () => {
  searchPanel.classList.remove('active');
}

