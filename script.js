  $(document).ready(function() {
  	var delay = 100;
    $("#prompt").lettering();
    $("#prompt").children("span").each(function(i) {
    	var x = $(this);
    	var d = i * 100;
    	if($(this).text() !== '_') {
			setTimeout(function(){x.show()}, delay+d);
    	} else {
    		d += 1000;
    		setTimeout(function(){$("#prompt").append('<br />');}, delay+d);
    		setTimeout(function() {

    			$('#wrapper').show();
    		}, delay+d+500);
    	}
    });
  });
