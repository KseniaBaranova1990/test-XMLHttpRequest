"use strict";

const inputShek = document.querySelector("#shek"),
  inputRub = document.querySelector("#rub");

inputShek.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-Type", "application/json; charset=utf8");
  request.send();

  request.addEventListener("load", () => {
    if (request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      inputRub.value = (+inputShek.value * data.current.rub).toFixed(2);
      //иногда сервер не работает нужно обработать ошибку
    } else {
      inputRub.value = "Что-то пошло не так...";
    }
  });
});
