(() => {
  // src/js/vars.js
  window.$ = (el) => document.querySelector(el);
  window.$$ = (el) => document.querySelectorAll(el);
  window.isMobile = () => {
    if (/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)) {
      return true;
    }
    ;
    return false;
  };

  // src/js/service-worker.js
  if ("serviceWorker" in navigator && "PushManager" in window) {
    navigator.serviceWorker.register("../sw").then((registration) => {
      window.swreg = registration;
    }).catch((err) => {
      console.log("service worker not working");
    });
  } else console.log("serviceWorker is not supported");

  // src/js/app.js
  console.log("Check import functions:", $("body"));
  var testAsync = async () => {
    await console.log("Check async funtions: Ok");
  };
  testAsync();
  try {
    console.log("Check babel job:", testAsync);
  } catch (error) {
    console.log("Error", error);
  }
})();
//# sourceMappingURL=app.js.map
