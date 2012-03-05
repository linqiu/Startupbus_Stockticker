var strip_length = 0;
// sets width of each stock name
var stock_width = 60;
var pauseTime = 0;


window.onload = (function(){
	try{
		jQuery('#loadingMessage').append("loading...");
		jQuery.getJSON("http://www.startupbus.com/game/companies.json?callback=?", function(data) {
			showData(data);
		});
	} catch(e){		
		alert("There was an error reading JSON output. Please try again later.");
	}

});

jQuery(document).ready(function() {
	jQuery('#loadingMessage').hide();

	ShowTick(jQuery('#stock_strip'), strip_length, pauseTime);
	
	jQuery('#StockTicker').mouseover(function() {
    	jQuery('#stock_strip').stop();
	});
	jQuery('#StockTicker').mouseout(function() {
		var amount = jQuery('#stock_strip').css("left");
		amount.replace("px","");
		amount = parseInt(amount);
		if(amount < 0) {
			var resumeTime = pauseTime + (pauseTime*(amount/strip_length));
			resumeTime = parseInt(resumeTime);
		} else {
			resumeTime = pauseTime;
		}
        ShowTick(jQuery('#stock_strip'), strip_length, resumeTime);
	});
});


function ShowTick(elem, strip_length, pauseTimeAmount) {
    elem.animate({
    	left: -strip_length
  	}, pauseTimeAmount, 'linear', function() {
  		reset_strip();
    });
}

function reset_strip() {
	jQuery('#stock_strip').css('left', "179px");
	ShowTick(jQuery('#stock_strip'), strip_length, pauseTime);
}



function showData(init_data) {
	var len = init_data.length;

	strip_length = len * stock_width;
	pauseTime = len * 1090;
		
	dv_stock = document.createElement('div');
	dv_stock.className = "stock_list";
	dv_stock.setAttribute('id', "stock_strip");
	jQuery("#StockTicker").append(dv_stock);					

	jQuery("#stock_strip").css('width', strip_length+"px");	
	
	for( var i=0; i<len; i++) {
		dv_each_stock = document.createElement('div');
		dv_each_stock.className = "stock_name";
		dv_each_stock.setAttribute('id', "each_stock"+i);
		jQuery("#stock_strip").append(dv_each_stock);
		
		jQuery("#each_stock"+i).append('<a href="'+init_data[i].created_at+'" title="'+init_data[i].name+'">$'+init_data[i].ticker+"</a>");
		
		

	}

}

function cont_parse() {
	try {
		var latest_url = "../scripts/front_page_feed_update.php?latest=" + encodeURIComponent(latest_timestamp);

		jQuery.getJSON(latest_url, function(data2) {
			parsedData = data2;
			if (parsedData.length < 1) {
				setTimeout("cont_parse()", 10000);
			} else {
				showData();

			}
		});
	
	} catch(e) {
		alert("There was an error reading the JSON output. Try again later!");
	}

}
