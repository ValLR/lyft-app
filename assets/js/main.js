$(document).ready(function() {
    $('select').material_select();
  });


function aleatorio(inferior,superior){
       var resAleatorio = Math.floor((Math.random() * (superior - inferior + 1)) + inferior);
      return resAleatorio;
}



$("#next").click(function(){
  if($("#telefono").val().length === 9){  
      $("#next").attr("href","input-code.html");
     return alert(" Tu código es LAB-" + aleatorio(100,999))

 }
  else{
    alert("Please write a valid number")
  }

});
