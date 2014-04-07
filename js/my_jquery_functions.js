$(document).ready(function() {
	$("h2").click(function() {
		$("button,h2").addClass("blue");
		alert("The paragraph is now hidden");
	});
});

$(document).ready(function() {
	$("button#button1").click(function() {
		$("p#test").toggle(0, function() {
			alert("The paragraph is now hidden");
		});
	});
});

$(document).ready(function() {
	$("button#button2").click(function() {
		$(".test").hide();
	});
});

$(document).ready(function() {
	$("button#button3").click(function() {
		$(".test1").css("background-color", "blue");
		$("h2").addClass("important");
	});
});

$(document).ready(function() {
	$("#btn1").click(function() {
		$('#test3').load('text/readme.txt');
			alert("hallo");
	})
});


$(document).ready(function() {
	$("#button10").click(function() {
		alert("waiting...")
		$.blockUI({ overlayCSS: { backgroundColor: '#00f' } }); 
        setTimeout($.unblockUI, 2000); 
	})
});

$.ajax({
	type : "GET",
	url : "file://localhost/Users/lij/study/jquery/project1/text",
	dataType : "txt",
	success : readData(data)
});
