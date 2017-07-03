
  $(document).ready(function() {
    $('select').material_select();
  });

$("#telefono").on("keyup", function(){
  $("#next").prop("disabled",false);
  if($("#telefono").val() != 9){
    $("#next").prop("disabled", true);
  }
})

function aleatorio(inferior,superior){ 
       var resAleatorio = Math.floor((Math.random() * (superior - inferior + 1)) + inferior);
      return resAleatorio;
}

$("#next").click(function(){
  alert(" Tu código es LAB-" + aleatorio(100,999))
});


