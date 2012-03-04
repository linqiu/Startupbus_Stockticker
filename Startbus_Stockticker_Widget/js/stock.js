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

});

$(document).ready(function() {
	showData();
	ShowTick($('#stock_strip'));
});

function ShowTick(elem) {
    elem.animate({
    	left: '-=1750'
  	}, 30000, 'linear', function() {
    });
}

$('#stock_strip').mouseover(function() {
	alert("OMG I'm HOVERING");
    $(this).stop(true, true);
});
$('#stock_strip').mouseout(function() {
        ShowTick($(this));
});

function showData() {
	dv_stock = document.createElement('div');
	dv_stock.className = "stock_list";
	dv_stock.setAttribute('id', "stock_strip");
	
	$("#StockTicker").append(dv_stock);					
	
	var init_data = $.parseJSON('[{"bus_id":1,"cash":100.0,"created_at":"2012-03-01T01:27:23Z","id":1,"last_sale_price":13.0,"name":"New York Co 1","profile_desc":null,"sector_id":null,"shares":100,"ticker":"New1","updated_at":"2012-03-03T13:19:32Z"},{"bus_id":1,"cash":100.0,"created_at":"2012-03-01T01:27:23Z","id":2,"last_sale_price":7.0,"name":"New York Co 2","profile_desc":null,"sector_id":null,"shares":100,"ticker":"New2","updated_at":"2012-03-03T12:07:27Z"},{"bus_id":1,"cash":100.0,"created_at":"2012-03-01T01:27:23Z","id":3,"last_sale_price":11.0,"name":"New York Co 3","profile_desc":null,"sector_id":null,"shares":100,"ticker":"New3","updated_at":"2012-03-03T11:43:26Z"},{"bus_id":2,"cash":100.0,"created_at":"2012-03-01T01:27:24Z","id":4,"last_sale_price":26.0,"name":"Silicon Valley Co 1","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Sil1","updated_at":"2012-03-03T12:55:31Z"},{"bus_id":2,"cash":100.0,"created_at":"2012-03-01T01:27:24Z","id":5,"last_sale_price":29.0,"name":"Silicon Valley Co 2","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Sil2","updated_at":"2012-03-03T13:19:33Z"},{"bus_id":2,"cash":100.0,"created_at":"2012-03-01T01:27:24Z","id":6,"last_sale_price":24.0,"name":"Silicon Valley Co 3","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Sil3","updated_at":"2012-03-03T12:31:29Z"},{"bus_id":3,"cash":100.0,"created_at":"2012-03-01T01:27:24Z","id":7,"last_sale_price":10.0,"name":"Florida Co 1","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Flo1","updated_at":"2012-03-03T12:55:31Z"},{"bus_id":3,"cash":100.0,"created_at":"2012-03-01T01:27:25Z","id":8,"last_sale_price":13.0,"name":"Florida Co 2","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Flo2","updated_at":"2012-03-03T13:19:33Z"},{"bus_id":3,"cash":100.0,"created_at":"2012-03-01T01:27:25Z","id":9,"last_sale_price":18.0,"name":"Florida Co 3","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Flo3","updated_at":"2012-03-03T13:19:33Z"},{"bus_id":4,"cash":100.0,"created_at":"2012-03-01T01:27:25Z","id":10,"last_sale_price":9.0,"name":"Cincinnati Co 1","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Cin1","updated_at":"2012-03-03T12:55:31Z"},{"bus_id":4,"cash":100.0,"created_at":"2012-03-01T01:27:25Z","id":11,"last_sale_price":5.0,"name":"Cincinnati Co 2","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Cin2","updated_at":"2012-03-03T13:19:33Z"},{"bus_id":4,"cash":100.0,"created_at":"2012-03-01T01:27:26Z","id":12,"last_sale_price":13.0,"name":"Cincinnati Co 3","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Cin3","updated_at":"2012-03-03T12:31:30Z"},{"bus_id":5,"cash":100.0,"created_at":"2012-03-01T01:27:26Z","id":13,"last_sale_price":9.0,"name":"Los Angeles Co 1","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Los1","updated_at":"2012-03-03T12:31:30Z"},{"bus_id":5,"cash":100.0,"created_at":"2012-03-01T01:27:26Z","id":14,"last_sale_price":16.0,"name":"Los Angeles Co 2","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Los2","updated_at":"2012-03-03T12:31:30Z"},{"bus_id":5,"cash":100.0,"created_at":"2012-03-01T01:27:26Z","id":15,"last_sale_price":22.0,"name":"Los Angeles Co 3","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Los3","updated_at":"2012-03-03T13:19:33Z"},{"bus_id":6,"cash":100.0,"created_at":"2012-03-01T01:27:27Z","id":16,"last_sale_price":17.0,"name":"Louisiana Co 1","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Lou1","updated_at":"2012-03-03T13:19:33Z"},{"bus_id":6,"cash":100.0,"created_at":"2012-03-01T01:27:27Z","id":17,"last_sale_price":7.0,"name":"Louisiana Co 2","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Lou2","updated_at":"2012-03-03T12:07:28Z"},{"bus_id":6,"cash":100.0,"created_at":"2012-03-01T01:27:27Z","id":18,"last_sale_price":3.0,"name":"Louisiana Co 3","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Lou3","updated_at":"2012-03-03T13:19:33Z"},{"bus_id":7,"cash":100.0,"created_at":"2012-03-01T01:27:27Z","id":19,"last_sale_price":4.0,"name":"Team Mexico Co 1","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Tea1","updated_at":"2012-03-03T13:19:33Z"},{"bus_id":7,"cash":100.0,"created_at":"2012-03-01T01:27:28Z","id":20,"last_sale_price":11.0,"name":"Team Mexico Co 2","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Tea2","updated_at":"2012-03-03T12:55:32Z"},{"bus_id":7,"cash":100.0,"created_at":"2012-03-01T01:27:28Z","id":21,"last_sale_price":7.0,"name":"Team Mexico Co 3","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Tea3","updated_at":"2012-03-03T13:19:33Z"},{"bus_id":8,"cash":100.0,"created_at":"2012-03-01T01:27:28Z","id":22,"last_sale_price":18.0,"name":"Las Vegas Co 1","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Las1","updated_at":"2012-03-03T12:31:30Z"},{"bus_id":8,"cash":100.0,"created_at":"2012-03-01T01:27:28Z","id":23,"last_sale_price":14.0,"name":"Las Vegas Co 2","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Las2","updated_at":"2012-03-03T12:55:32Z"},{"bus_id":8,"cash":100.0,"created_at":"2012-03-01T01:27:28Z","id":24,"last_sale_price":9.0,"name":"Las Vegas Co 3","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Las3","updated_at":"2012-03-03T12:55:32Z"},{"bus_id":9,"cash":100.0,"created_at":"2012-03-01T01:27:29Z","id":25,"last_sale_price":6.0,"name":"Washington, DC Co 1","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Was1","updated_at":"2012-03-03T12:55:32Z"},{"bus_id":9,"cash":100.0,"created_at":"2012-03-01T01:27:29Z","id":26,"last_sale_price":10.0,"name":"Washington, DC Co 2","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Was2","updated_at":"2012-03-03T12:55:32Z"},{"bus_id":9,"cash":100.0,"created_at":"2012-03-01T01:27:29Z","id":27,"last_sale_price":9.0,"name":"Washington, DC Co 3","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Was3","updated_at":"2012-03-03T10:31:21Z"},{"bus_id":10,"cash":100.0,"created_at":"2012-03-01T01:27:30Z","id":28,"last_sale_price":9.0,"name":"Boston Co 1","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Bos1","updated_at":"2012-03-03T13:19:34Z"},{"bus_id":10,"cash":100.0,"created_at":"2012-03-01T01:27:30Z","id":29,"last_sale_price":5.0,"name":"Boston Co 2","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Bos2","updated_at":"2012-03-03T11:19:25Z"},{"bus_id":10,"cash":100.0,"created_at":"2012-03-01T01:27:30Z","id":30,"last_sale_price":3.0,"name":"Boston Co 3","profile_desc":null,"sector_id":null,"shares":100,"ticker":"Bos3","updated_at":"2012-03-03T12:55:32Z"}]');

	var len = init_data.length;
	
	for( var i=0; i<len; i++) {
		dv_each_stock = document.createElement('div');
		dv_each_stock.className = "stock_name";
		dv_each_stock.setAttribute('id', "each_stock"+i);
		$("#stock_strip").append(dv_each_stock);
		
		$("#each_stock"+i).append("$"+init_data[i].ticker);

	}
//	$("#stock_strip").append("<h2>OMG this is the longest widget i've ever seen in my life it's so epically long. This is the stockticker widget</h2>");

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