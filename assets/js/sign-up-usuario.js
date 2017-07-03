$(document).ready(function () {
	$("#next").click(function(){
		if(!(/^([a-zñáéíóú]{2,13})+$/.test($("#icon_name").val()))){
   			$("#icon_name").append($("#icon_name").val("Error"));
  		}

  		if(!(/^([a-zñáéíóú]{2,13})+$/.test($("#icon_lastname").val()))){
   			$("#icon_lastname").append($("#icon_lastname").val("Error"));
  		}

  		if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($("#icon_email").val())) ){
   			$("#icon_email").append($("#icon_email").val("Error"));
  		}else{
        $("#next").attr("href","map.html");
      }
  	})
});