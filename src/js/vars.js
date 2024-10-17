//global vars

window.$ = (el) => document.querySelector(el);
window.$$ = (el) => document.querySelectorAll(el);

window.isMobile = () => {
if(/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)) {
return true;
};
return false;
}


  

