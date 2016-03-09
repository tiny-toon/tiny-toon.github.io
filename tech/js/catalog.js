var buy = document.querySelectorAll(".buy");
var incardup = document.querySelector("#incard");
var closecard = incardup.querySelector(".modal-content-close");

[].forEach.call(buy, function(item) {
  item.addEventListener("click", function(event) {
    event.preventDefault();
    incardup.classList.add("modal-content-show");
  });
});

closecard.addEventListener("click", function (event) {
    event.preventDefault();
    incardup.classList.remove("modal-content-show");
//        console.log("подключено");
});