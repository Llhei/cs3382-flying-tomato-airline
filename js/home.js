

$(document).ready(function(){
  setTimeout(showbutton, 1500);
  $("#showPage, #skiptocontent").click(showPage);
  $(".searchBox").click(SearchLink);
  $(".aboutUsBox").click(AboutUsLink);
});

function showbutton() {
  $(".scene").fadeOut(1000, function(){
    $("#showPage").fadeIn();
  });
}

function showPage() {
  $(".loader").fadeOut(1000, function(){
    $(".navigation, footer, .container").fadeIn()
  });
}

function SearchLink() {
    window.location.href = "Search.html";
}

function AboutUsLink() {
    window.location.href = "AboutUs.html";
}
