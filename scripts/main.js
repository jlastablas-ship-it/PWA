if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./scripts/sw.js')
      .then(reg => console.log('SW registrado', reg))
      .catch(err => console.log('Fallo SW', err));
  });
}



