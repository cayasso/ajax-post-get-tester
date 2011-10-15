/**
 * Ajax POST and GET Tester (GUI)
 * Author: Jonathan Brumley
 */

var $input = $('input-field');

$input
.focus(function(){
	(this.value == 'http://yoursite.com/?name=&active=true') && (this.value = '');	
}).blur(function(){
	(this.value == '') && (this.value = 'http://example.com/?name=joe&active=true');
});

$('#ajaxform').submit(function(){

	var url = $('#input-field').val();

	if (!isURL(url)) {
		alert('Invalid URL');
	} else {		
		
		var method = $(this).find('#method-select').val();

		$.ajax({
			type: method,
		  	url: url,
		  	success: function(data){
				$('#formated-response').html(data);
				$('#raw-response pre').text(data);
			},
			error: function(){
				alert('There was an error submitting your Ajax request');
			}					
		});				
	}

	return false;
});

function isURL(url) {
  var regexURL = new RegExp("^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
  return regexURL.test(url);
}


