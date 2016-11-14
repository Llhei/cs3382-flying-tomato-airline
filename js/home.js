


$(document).ready(function(){
  setTimeout(showbutton, 1500);
  $("#showPage").click(showPage);
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
