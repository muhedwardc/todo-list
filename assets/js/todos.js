//Check off by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("clicked");
});

//Click on X to delete
$("ul").on("click", "span", function(event){
	//Fade out then delete
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//Preventing from bubbling up
	event.stopPropagation();
});

//Add new todo
$("input[type='text']").keypress(function(event){
	//Hit enter
	if(event.which === 13){ // 13 = enter button
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clear the input form
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " +todoText +"</li>");
	}
})

//Add-button
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})