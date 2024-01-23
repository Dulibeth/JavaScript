// cookie.js
let cookieEstado = false;

function getCookie() {
  return cookieEstado;
}

function setCookie(valor) {
  cookieEstado = valor;
}

module.exports = { getCookie, setCookie };
