$.ajax({
	type: "get",
	url: "http://130.233.4.93:8080/URLTest/url/add",
	async: true,
	dataType: 'jsonp',
	success: function() {
		alert(0)
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {
		alert(XMLHttpRequest.status);
		alert(XMLHttpRequest.readyState);
		alert(textStatus);
	}
});