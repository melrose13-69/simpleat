// JS
import './js'
import 'cookielib/src/cookie'
// import {
//  GoogleCharts
// } from 'google-charts'
import 'chart.js'
// SCSS
import './assets/scss/main.scss'
// global const

// burger menu
let burgerMenu = document.getElementById('burger'),
 headerList = document.getElementById('header-list'),
 headerBtn = document.getElementById('header-btn'),
 headerInner = document.getElementById('header-inner');
let headerListChilds = headerList.children,
 headerListChildsLength = headerListChilds.length,
 headerBtnChilds = headerBtn.children,
 headerBtnChildsLength = headerBtnChilds.length;

// burger menu
burgerMenu.addEventListener('click', function () {
 this.classList.toggle('menu-on');
 headerList.classList.toggle('show');
 headerBtn.classList.toggle('show');
 headerInner.classList.toggle('bgc-show');
 body.classList.toggle('body-lock')
})

// burger list
window.addEventListener("resize", function () {
 if (window.matchMedia("(max-width: 768px)").matches) {

  for (let i = 0; i < headerBtnChildsLength; i++) {
   headerList.insertBefore(headerBtnChilds[0], headerListChilds[i + 3]);
  }
 } else {
  for (let i = 0; i < headerListChildsLength; i++) {
   headerBtn.insertBefore(headerListChilds[1], headerBtnChilds[i + 1]);
  }
 }
});


// // chart
let speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Montserrat";
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = "#121920";
Chart.defaults.global.elements.rectangle.borderColor = 'black';


let dataFirst = {
 label: "Glucose",
 data: [0, 3, 1, 0.2, -0.3],
 lineTension: .3,
 borderWidth: 5,
 fill: false,
 borderColor: '#86898d',
 pointRadius: 0,
};

let dataSecond = {
 label: "Simpleat",
 data: [0, 1, 0, -0.3, 0],
 lineTension: .3,
 borderWidth: 5,
 fill: false,
 borderColor: '#36c1b9',
 pointRadius: 0
};

let timeData = {
 labels: ["", "30 MIN", "60 MIN", "90 MIN", "120 MIN"],
 datasets: [dataFirst, dataSecond]
};

let dataOptions = {
 maintainAspectRatio: false,
 legend: {
  display: true,
  position: 'top',
  labels: {
   boxWidth: 17,
   padding: 20
  },
 },
 scales: {
  xAxes: [{
   barPercentage: 1,
   ticks: {
    max: 120,
    min: 0,
    stepSize: 30
   },
   gridLines: {
    zeroLineColor: '#abaeb0',
    zeroLineWidth: 2,
    borderDash: [6, 4],
   },
   scaleLabel: {
    labelString: "Glucose (mmol/L)",
   }
  }],
  yAxes: [{
   ticks: {
    max: 4,
    min: -1,
    stepSize: 1
   },
   gridLines: {
    zeroLineColor: '#abaeb0',
    zeroLineWidth: 2,
    borderDash: [6, 4],
   },
   scaleLabel: {
    display: true,
    labelString: "Glucose (mmol/L)",
   }
  }]
 }
}


let lineChart = new Chart(speedCanvas, {
 type: 'line',
 data: timeData,
 options: dataOptions
});


// select lang
let myBtn = document.getElementsByClassName('drop_btn');
let i;
for (i = 0; i < myBtn.length; i++) {
 myBtn[i].addEventListener('click', function () {
  let myContent = this.nextElementSibling;
  myContent.classList.toggle('seeme');
  this.classList.toggle('active')
  let myImage = this.children[1];
  myImage.classList.toggle('myImage');
 });
}
let myList = document.getElementsByClassName('footer__select-btn');
let b;
for (b = 0; b < myList.length; b++) {
 myList[b].addEventListener('click', function () {
  let listPar = this.parentElement,
   mainPar = listPar.parentElement,
   bigPar = mainPar.children[0],
   myTitle = bigPar.children[0];
  myTitle.innerHTML = this.innerHTML;
  myImage.classList.remove('active')
 })
}

// select lang close
window.onclick = function (event) {
 if (!event.target.matches('.current') && !event.target.matches('.arrow_img')) {
  let mySelect = document.getElementsByClassName('main__content');
  let x;
  for (x = 0; x < mySelect.length; x++) {
   mySelect[x].classList.remove('seeme');
  }
  let theImage = document.getElementsByClassName('select_img');
  let z;
  for (z = 0; z < theImage.length; z++) {
   theImage[z].classList.remove('myImage');
  }
  let btn = document.getElementsByClassName('footer__select-btn');
  let y;
  for (y = 0; y < theImage.length; y++) {
   btn[y].classList.remove('active');
  }
 }
}

// button scroll page up
let goTopBtn = document.querySelector('.btn__order');
goTopBtn.addEventListener('click', backToTop);

function backToTop() {
 if (window.pageYOffset > 0) {
  window.scrollBy(0, -80);
  setTimeout(backToTop, 0);
 }
}


// market bottles
let select = document.querySelector('.select');
let selectCurrent = document.querySelector('.select__current');
let panels = document.querySelectorAll('.select__item');
let result = document.getElementById('result')


select.addEventListener('click', function (event) {
 let el = event.target.dataset.choice;
 let text = event.target.innerText;
 let price = event.target.dataset.value;
 if (el === 'choosen') {
  selectCurrent.innerText = text;
  result.innerText = '€' + (price * 12 + 12) * 2.5;
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


// checkbox
let subscribe = document.getElementById('subscribe');
let purchase = document.getElementById('purchase');
let button = document.getElementById('button');
let purchaseText = 'Add to cart';
let subscribeText = 'Subscribe';

purchase.addEventListener('change', function (i) {
 if (purchase.checked) {
  button.innerText = purchaseText;
 } else {}
});

subscribe.addEventListener('change', function (e) {
 if (subscribe.checked) {
  button.innerText = subscribeText;
 } else {}
});

// subscribe info
let subscribeBtn = document.getElementById('subscribe-checkbox')
let purchaseBtn = document.getElementById('buynow-checkbox');

if (subscribeBtn.classList.contains('subscribe__info-open')) {} else {
 subscribeBtn.classList.remove('subscribe__info-open');
}
purchaseBtn.addEventListener('click', function () {
 subscribeBtn.classList.remove('subscribe__info-open');
});

// cookie
let cookiesStorage = {
 getItem: (key) => {
  let cookies = document.cookie
   .split(';')
   .map(cookie => cookie.split('='))
   .reduce((acc, [key, value]) => ({
    ...acc,
    [key.trim()]: value
   }), {})
  return cookies[key];
 },
 setItem: (key, value) => {
  document.cookie = `${key}=${value}`;
 }
}


let storageType = cookiesStorage;
let consentPropertyName = 'jdc_consent';

let shouldShowPopup = () => !storageType.getItem(consentPropertyName);
let saveToStarage = () => storageType.setItem(consentPropertyName, true);

let consentPopupWrapper = document.getElementById('cookie-popup-wrapper');
let consentPopup = document.getElementById('cookie-popup');
let acceptBtn = document.getElementById('accept');


window.onload = () => {

 let acceptFn = event => {
  saveToStarage(storageType)
  consentPopup.classList.add('hidden');
  consentPopupWrapper.classList.add('hidden');
 };

 acceptBtn.addEventListener('click', acceptFn);

 if (shouldShowPopup(storageType)) {
  setTimeout(() => {
   consentPopup.classList.remove('hidden');
   consentPopupWrapper.classList.remove('hidden');
  }, 200);
 }
};


// // vieo popup--------------------------------------------------
let popupLinks = document.querySelectorAll('.popup-link');
let body = document.querySelector('body');
let lockPadding = document.querySelectorAll('.lock-padding');
let video = document.getElementById('frame');


let unlock = true;
let timeout = 500;


if (popupLinks.length > 0) {
 for (let index = 0; index < popupLinks.length; index++) {
  let popupLink = popupLinks[index];
  let popupLinkOpen = popupLink.getAttribute('data-video');
  popupLink.addEventListener('click', function (e) {
   let popupName = popupLink.getAttribute('href').replace('#', '');
   let curentPopup = document.getElementById(popupName);
   video.setAttribute('src', popupLinkOpen);
   popupOpen(curentPopup);
   e.preventDefault();
  })
 }
}

let popupCloseIcon = document.querySelectorAll('.popup-close');
if (popupCloseIcon.length > 0) {
 for (let index = 0; index < popupCloseIcon.length; index++) {
  let el = popupCloseIcon[index];
  el.addEventListener('click', function (e) {
   popupClose(el.closest('.popup'));
   e.preventDefault();
  })
 }
}


function popupOpen(curentPopup) {
 if (curentPopup && unlock) {
  let popupActive = document.querySelector('.popup.open');
  if (popupActive) {
   popupClose(popupActive, false);
  } else {
   bodyLock();
  }

  curentPopup.classList.add('open');
  curentPopup.addEventListener('click', function (e) {
   if (!e.target.closest('.popup__content')) {
    popupClose(e.target.closest('.popup'));
   }
  });
 }
}

function popupClose(popupActive, doUnlock = true) {
 if (unlock) {
  video.setAttribute('src', '');
  popupActive.classList.remove('open');
  if (doUnlock) {
   bodyUnLock();
  }
 }
}

function bodyLock() {
 let lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
 if (lockPadding.length > 0) {
  for (let index = 0; index < lockPadding.length; index++) {
   let el = lockPadding[index];
   el.style.paddingRight = lockPaddingValue;
  }
 }
 body.style.paddingRight = lockPaddingValue;
 body.classList.add('lock');

 unlock = false;
 setTimeout(function () {
  unlock = true;
 }, timeout);
}

function bodyUnLock() {
 setTimeout(function () {
  if (lockPadding.length > 0) {
   for (let index = 0; index < lockPadding.length; index++) {
    let el = lockPadding[index];
    el.style.paddingRight = '0px';
   }
  }
  body.style.paddingRight = '0px';
  body.classList.remove('lock');
 }, 0);

 unlock = false;
 setTimeout(function () {
  unlock = true;
 }, timeout);
}

document.addEventListener('keydown', function (e) {
 if (e.which === 27) {
  let popupActive = document.querySelector('.popup.open');
  popupClose(popupActive);
 }
});


// superfood tabs
document.querySelectorAll('.tabs__triggers-item').forEach((item) =>
 item.addEventListener('click', function (e) {
  e.preventDefault();
  let id = e.target.getAttribute('href').replace('#', '');

  document.querySelectorAll('.tabs__triggers-item').forEach(
   (child) => child.classList.remove('tabs__triggers-item--active')
  );

  document.querySelectorAll('.tabs__content-item').forEach(
   (child) => child.classList.remove('tabs__content-item--active')
  );

  item.classList.add('tabs__triggers-item--active');
  document.getElementById(id).classList.add('tabs__content-item--active');
 })
);

document.querySelector('.tabs__triggers-item').click();






// form verification
document.addEventListener('DOMContentLoaded', () => {
 "use strict";

 const form = document.querySelector('.form-email');

 const regExpEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

 let isValidate = false;

 const submit = () => {}

 const validateElem = (elem) => {
  if (elem.name == 'email') {
   if (!regExpEmail.test(elem.value) && elem.value != '') {
    elem.nextElementSibling.textContent =
     '* Please enter correct email';
    elem.classList.add('error');
    isValidate = false;
   } else {
    elem.nextElementSibling.textContent =
     '';
    elem.classList.remove('error');
    isValidate = true;
   }
  }
 }

 for (let elem of form.elements) {
  if (
   elem.tagName != 'BUTTON'
  ) {
   elem.addEventListener('blur', () => {
    validateElem(elem);
   })
  }
 }

 form.addEventListener('submit', (even) => {
  even.preventDefault();
  // таргетируем все эдементы input в форме на валидацию
  for (let elem of form.elements) {
   if (
    elem.tagName != 'BUTTON'
   ) {
    if (elem.value == '') {
     elem.nextElementSibling.textContent = '* This field is empty'
     elem.classList.add('error');
     isValidate = false;
    } else {
     elem.nextElementSibling.textContent = ''
     elem.classList.remove('error');
     isValidate = true;
    }
   }
  }

  if (isValidate = true) {
   submit();
   form.reset();
  }
 })
})




// ------------------------------------------------------
// polifils

// polifill closest
(function () {

 if (!Element.prototype.closest) {
  Element.prototype.closest = function (css) {
   var node = this;

   while (node) {
    if (node.matches(css)) return node;
    else node = node.parentElement;
   }
   return null;
  };
 }
})();

// polifill matches
(function () {

 if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.matchesSelector ||
   Element.prototype.webkitMatchesSelector ||
   Element.prototype.mozMatchesSelector ||
   Element.prototype.msMatchesSelector;
 }
})();