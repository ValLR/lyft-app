<<<<<<< HEAD
$(document).ready(function () {
	$(".submit-button").click(function(){
		if(!(/^([a-zñáéíóú]{2,13})+$/.test($("#icon_name").val()))){
   			$("#icon_name").append($("#icon_name").val("Error"));
  		}
  		if(!(/^([a-zñáéíóú]{2,13})+$/.test($("#icon_lastname").val()))){
   			$("#icon_lastname").append($("#icon_lastname").val("Error"));
  		}
  		if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($("#icon_email").val())) ){
   			$("#icon_email").append($("#icon_email").val("Error"));
  		}
  	})
});
=======
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

>>>>>>> master
