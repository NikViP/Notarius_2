$(function () {
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
    return false;
  });
});

$(document).ready(function () {
  $(".notarial-action-item").click(function () {
    $(".active-doc").removeClass("active-doc");
    dataTextId = $(this).attr("data-text-id");
    $("#" + dataTextId).addClass("active-doc");
  });
});

