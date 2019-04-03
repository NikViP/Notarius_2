//Плавный переход по якорным ссылкам на странице
$(function () {
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
    return false;
  });
});

//Клик по пункту в меню "Нотариальные действия" меняет содержимое текстового блока справа)
$(document).ready(function () {
  $(".actions__item").click(function () {
    $(".actions__doc--active").removeClass("actions__doc--active");
    dataTextId = $(this).attr("actions__id");
    $("#" + dataTextId).addClass("actions__doc--active");
  });
});

