function initAnimations(){
  console.log('Iniciando animaciones');
  $('.tarjeta img').animate({ opacity: 1, right: "0px" }, 500);
  $('.device-text').animate({ opacity: 1, right: "0px" }, 1000);
}

$(document).ready(function(){
  initAnimations();
});
