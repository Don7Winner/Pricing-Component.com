$(document).ready(() => {
  // Set initial state to show monthly prices
  $(".annual-num").hide();
  $(".monthly-num").show();

  // Toggle between monthly and annual pricing on checkbox change
  $('.switch input[type="checkbox"]').on("change", function () {
    if ($(this).is(":checked")) {
      $(".monthly-num").hide();
      $(".annual-num").show();
    } else {
      $(".annual-num").hide();
      $(".monthly-num").show();
    }
  });
});
