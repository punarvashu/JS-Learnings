'use strict';

const model = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-model');
const btnOpen = document.querySelectorAll('.show-model');

const openModel = function () {
  //console.log('button clicked');
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener('click', openModel);
}

// close the pop-up when cross button is clicked

btnClose.addEventListener('click', closeModel);

// close the pop-up when we click on the empty space on page

overlay.addEventListener('click', closeModel);

//Close the Pop-up when escape key is pressed

document.addEventListener('keydown', function (e) {
  //console.log(e);
  if (e.key === 'Escape' && !model.classList.contains('hidden')) closeModel();
});
