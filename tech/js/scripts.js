var link = document.querySelector(".btn-write-us");
var map = document.querySelector(".open-map");

var popup = document.querySelector("#window");
var mapup = document.querySelector("#map");


var closepop = popup.querySelector(".modal-content-close");
var closemap = mapup.querySelector(".modal-content-close");


link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
});

map.addEventListener("click", function(event) {
  event.preventDefault();
  mapup.classList.add("modal-content-show");
});

closepop.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  //        console.log("подключено");
});

closemap.addEventListener("click", function(event) {
  event.preventDefault();
  mapup.classList.remove("modal-content-show");
  //        console.log("подключено");
});

//Окно в каталоге

//var link = document.querySelector(".buy");
//var popup = document.querySelector(".modal-content-catalog");
//var close = document.querySelector(".modal-content-close");
//
//
//link.addEventListener("click", function (event) {
//    event.preventDefault();
//    popup.classList.add("modal-content-catalog-show");
//});
//
//close.addEventListener("click", function (event) {
//    event.preventDefault();
//    popup.classList.remove("modal-content-show");
////        console.log("подключено");
//});
//
////Карта
//
//      var mapOpen = document.querySelector(".js-open-map");
//
//      var mapPopup = document.querySelector(".modal-content-map");
//      var mapClose = mapPopup.querySelector(".modal-content-close");
//
//      mapOpen.addEventListener("click", function(event) {
//        event.preventDefault();
//        mapPopup.classList.add("modal-content-show");
//      });
//
//      mapClose.addEventListener("click", function(event) {
//        event.preventDefault();
//        mapPopup.classList.remove("modal-content-show");
//      });
//
//      window.addEventListener("keydown", function(event) {
//        if (event.keyCode === 27) {
//          if (mapPopup.classList.contains("modal-content-show")) {
//            mapPopup.classList.remove("modal-content-show");
//          }
//        }
//      });
