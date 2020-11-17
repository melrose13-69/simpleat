// JS
import './js'

// SCSS
import './assets/scss/main.scss'

var myBtn = document.getElementsByClassName('drop_btn');
var i;
for (i = 0; i < myBtn.length; i++) {
 myBtn[i].addEventListener('click', function () {
  var myContent = this.nextElementSibling;
  myContent.classList.toggle('seeme');
  this.classList.toggle('active')
  var myImage = this.children[1];
  myImage.classList.toggle('myImage');
 });
}
var myList = document.getElementsByClassName('footer__select-btn');
var b;
for (b = 0; b < myList.length; b++) {
 myList[b].addEventListener('click', function () {
  var listPar = this.parentElement,
   mainPar = listPar.parentElement,
   bigPar = mainPar.children[0],
   myTitle = bigPar.children[0];
  myTitle.innerHTML = this.innerHTML;
  myImage.classList.remove('active')
 })
}


window.onclick = function (event) {
 if (!event.target.matches('.current') && !event.target.matches('.arrow_img')) {
  var mySelect = document.getElementsByClassName('main__content');
  var x;
  for (x = 0; x < mySelect.length; x++) {
   mySelect[x].classList.remove('seeme');
  }
  var theImage = document.getElementsByClassName('select_img');
  var z;
  for (z = 0; z < theImage.length; z++) {
   theImage[z].classList.remove('myImage');
  }
  var btn = document.getElementsByClassName('footer__select-btn');
  var y;
  for (y = 0; y < theImage.length; y++) {
   btn[y].classList.remove('active');
  }
 }
}



let select = document.querySelector('.select');
let selectCurrent = document.querySelector('.select__current');
let panels = document.querySelectorAll('.select__item');

select.addEventListener('click', function (event) {
 let el = event.target.dataset.choice;
 let text = event.target.innerText;
 if (el === 'choosen') {
  selectCurrent.innerText = text;
 }
 this.classList.toggle('is-active');


 let i;
 let actives = document.getElementsByClassName('active');

 for (i = 0; panels.length > i; i++) {
  panels[i].onclick = function () {
   let currentActive = actives[0];
   if (currentActive)
    currentActive.classList.remove("active");

   if (currentActive !== this)
    this.classList.add("active");
  };
 }
});