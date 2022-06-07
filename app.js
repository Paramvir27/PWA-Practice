if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
    .then(reg => {
      console.log("SW Registered =>", reg)
    })
    .catch(error => {
      console.log("SW NOT registered =>", error)
    });
}