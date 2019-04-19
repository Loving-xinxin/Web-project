$("section .product .left .qty a:nth-child(2)").click(function() {
  var quantity = $(this)
    .siblings("input")
    .val();
  var price =
    $(this)
      .parent()
      .siblings(".price")
      .find("span")
      .text() * 1;
  quantity++;
  $(this)
    .siblings("input")
    .val(quantity);
  var result = (price * quantity).toFixed(2);
  $(this)
    .parent()
    .siblings(".total")
    .find("span")
    .text(result);
});
$("section .product .left .qty a:nth-child(3)").click(function() {
  var quantity = $(this)
    .siblings("input")
    .val();
  var price =
    $(this)
      .parent()
      .siblings(".price")
      .find("span")
      .text() * 1;
  quantity--;
  $(this)
    .siblings("input")
    .val(quantity);
  if (quantity < 1) {
    $(this)
      .siblings("input")
      .val(0);
  }
  var result = (price * quantity).toFixed(2);
  $(this)
    .parent()
    .siblings(".total")
    .find("span")
    .text(result);
});


$(window).scroll(function() {
  var ind = $(window).scrollTop();
  if (ind > 100) {
    $("footer .toTop")
      .stop()
      .fadeIn(500);
  } else {
    $("footer .toTop")
      .stop()
      .fadeOut(500);
  }
});
$("footer .toTop").click(function() {
  $("html,body").animate({ scrollTop: "0" }, 5000);
});