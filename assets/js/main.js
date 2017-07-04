$(document).ready(function() {
    $('select').material_select();
  });
$(document).ready(function() {
    $("#next").click(function(){
 if($("#telefono").val().length != 9){
   alert("Debes ingresar 9 números")
}else{
      $("#next").attr("href","input-code.html");
     alert(" Tu código es LAB-" + aleatorio(100,999))
}
});



function aleatorio(inferior,superior){
       var resAleatorio = Math.floor((Math.random() * (superior - inferior + 1)) + inferior);
      return resAleatorio;
}
  });
