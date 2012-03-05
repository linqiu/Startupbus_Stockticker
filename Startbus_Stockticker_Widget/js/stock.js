var strip_length = 0;
// sets width of each stock name
var stock_width = 60;
var pauseTime = 0;


window.onload = (function(){
	try{
		$('#loadingMessage').append("loading...");
		$.getJSON("http://www.startupbus.com/game/companies.json?callback=?", function(data) {
			showData(data);
		});
	} catch(e){		
		alert("There was an error reading JSON output. Please try again later.");
	}

});

$(document).ready(function() {
	$('#loadingMessage').hide();

	ShowTick($('#stock_strip'), strip_length, pauseTime);
	
	$('#StockTicker').mouseover(function() {
    	$('#stock_strip').stop();
	});
	$('#StockTicker').mouseout(function() {
		var amount = $('#stock_strip').css("left");
		amount.replace("px","");
		amount = parseInt(amount);
		if(amount < 0) {
			var resumeTime = pauseTime + (pauseTime*(amount/strip_length));
			resumeTime = parseInt(resumeTime);
		} else {
			resumeTime = pauseTime;
		}
        ShowTick($('#stock_strip'), strip_length, resumeTime);
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
	$('#stock_strip').css('left', "179px");
	ShowTick($('#stock_strip'), strip_length, pauseTime);
}



function showData(init_data) {
	var len = init_data.length;

	strip_length = len * stock_width;
	pauseTime = len * 1090;
		
	dv_stock = document.createElement('div');
	dv_stock.className = "stock_list";
	dv_stock.setAttribute('id', "stock_strip");
	$("#StockTicker").append(dv_stock);					

	$("#stock_strip").css('width', strip_length+"px");	
	
	for( var i=0; i<len; i++) {
		dv_each_stock = document.createElement('div');
		dv_each_stock.className = "stock_name";
		dv_each_stock.setAttribute('id', "each_stock"+i);
		$("#stock_strip").append(dv_each_stock);
		
		$("#each_stock"+i).append('<a href="'+init_data[i].created_at+'" title="'+init_data[i].name+'">$'+init_data[i].ticker+"</a>");
		
		

	}

}

function cont_parse() {
	try {
		var latest_url = "../scripts/front_page_feed_update.php?latest=" + encodeURIComponent(latest_timestamp);

		$.getJSON(latest_url, function(data2) {
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
