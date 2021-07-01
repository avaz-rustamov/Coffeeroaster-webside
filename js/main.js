var  elModalButton = document.querySelector('.form-arrow--button');
var  elModalOpen = document.querySelector('.site-order--wrapper');
var elModalClose = document.querySelector('.modal__button--close')


elModalButton.addEventListener('click', function() {
  elModalOpen.classList.toggle('site-order--open');
});

// elModalClose.addEventListener('click', function() {
//   elModalOpen.classList.remove('site-order--open');
// });