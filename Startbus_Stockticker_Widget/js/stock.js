window.onload = (function(){
/*	try{
		$.getJSON("../scripts/front_page_feed.php", function(data) {
			parsedData = data;
			showData();
		});
	} catch(e){		
		alert("There was an error reading JSON output. Please try again later.");
	}
*/
showData();

});

$(document).ready(function() {
	
});

	
function showData() {
	dv_stock = document.createElement('div');
	dv_stock.className = "stock_list";
	dv_stock.setAttribute('id', "stock_strip");
	
	$("#StockTicker").append(dv_stock);					
	
	$("#stock_strip").append("<h2>OMG this is the longest widget i've ever seen in my life it's so epically long. This is the stockticker widget</h2>");

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