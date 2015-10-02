$(function(){

	$("#send_button").click(function(){
		var phone_number = $("#phone_number").val(),
			text_body = $("#text_body").val();

		$.ajax({
		  	type:"GET",
		  	url: "/send/" + phone_number + "/" + text_body
		}).done(function(data){
			console.log(data);
			if (data) {
				$('#congrats_modal').foundation('reveal', 'open');	
			} else {
				$('#error_modal').foundation('reveal', 'open');	
			}
		}).fail(function(data){
			console.log(data);
			$('#error_modal').foundation('reveal', 'open');
		});
	});

	$("#clear_button").click(function(){
		$("#phone_number").val("");
		$("#text_body").val("");
	});
});