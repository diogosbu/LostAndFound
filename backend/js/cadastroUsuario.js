$(document).ready(function() {
	$("#btnCadastrarUsuario").click(function() {

		var emailP = $("#email").val();
		var senhaP = $("#senha").val();
		var confirmaSenhaP = $("#confirmaSenha").val();
		var dNascimentoP = $("#dNascimento").val();

		$.post("/backend/Usuario.php?tipo=novo", {email: emailP, senha: senhaP, confirmaSenha: confirmaSenhaP, dNascimento: dNascimentoP},
		function(response){

			$("resultados").html("<div class=\"modal fade bs-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" > <div class=\"modal-dialog modal-sm\" role=\"document\"> <div class=\"modal-content\">"+response+"</div> </div> </div>");

			// $("body").html("<div class=\"x\" id=\"alert\">"+response+"</div>");
		  // $(".resultados").html(response);
		 }
		 , "html");
	});
});
