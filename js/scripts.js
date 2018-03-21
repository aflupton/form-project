$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var emailInput = $("input#email").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".email").text(emailInput);

    $("#letter").show();

    event.preventDefault();
  });
});
