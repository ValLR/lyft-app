 $(document).ready(function() {
    Materialize.updateTextFields();
  });

 /*$(document).ready(function () {
	$("#sendbtn").click(function(){
		if($(".imput-code").val()).length < 3  && $(".imput-code").val()).length > 4 ){
  
}
  	})
});*/
       
$("#sendbtn").click(function(){
 
  if($("#first_name2").val().length == ""){  
    alert("Enter your code")
 } else if($("#first_name2").val().length < 7){
    alert("I'm sorry, there are missing numbers")
 } else if($("#first_name2").val().length > 7){
    alert("I'm sorry, there are too many numbers")
 } else if($("#first_name2").val().length === 7){
    alert("Very well, enjoy your promotional code!")
 }
});