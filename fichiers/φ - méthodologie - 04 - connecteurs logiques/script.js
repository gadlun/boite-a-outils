// Load jquery
// https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js

var all_choices = $(".blank")
  .parent()
  .find(".choice_cloud");

$(".content_container").on("click", ".blank", function() {
  event.stopPropagation(); // Prevent the 'clicking anywhere hides it' function
  all_choices.hide("slow");
  var choiceCloud = $(this).find(".choice_cloud");
  choiceCloud.toggle();
});

$(".choice").click(function(event) {
  var myChoice = $(event.target);
  var isChoice = myChoice.is(".choice");
  event.stopPropagation(); // Prevent the 'clicking anywhere hides it' function
  if (isChoice) {
    //make sure I am a .choice element
    myChoice.closest(".blank")
      .find(".text_container")
      .text(myChoice.text());
    myChoice.parent().hide();
  }
});

// Clicking anywhere else hides it
$(document).on("click", function() {
  $(".choice_cloud").hide("slow");
});