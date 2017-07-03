  $(document).ready(function() {
    $('select').material_select();
  });

$("#telefono").on("keyup", function(){
  $("#next").prop("disabled",false);
  if($("#telefono").val() != 9){
    $("#next").prop("disabled", true);
  }
})

$("#next").click(function(){
  alert("heyheyhey");
});