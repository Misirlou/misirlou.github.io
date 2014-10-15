$(document).ready(function() {
	$('#leftnav a').removeClass("active");
	$("#container div").removeClass("active");
	if($(window.location.hash).length<1){
		$("#Aboutme").addClass("active");
		$('#Aboutmea').addClass("active");
	}
    else
	{
		$(window.location.hash).addClass("active");
		$(window.location.hash+'a').addClass("active");
	}
});
window.onhashchange = function () {
	$('#leftnav a').removeClass("active");
	$("#container div").removeClass("active");
	if($(window.location.hash).length<1){
		 $("#Aboutme").addClass("active");
		$('#Aboutmea').addClass("active");
		 }
    else{
	$(window.location.hash).addClass("active");
	$(window.location.hash+'a').addClass("active");
	}
}