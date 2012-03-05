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
	jQuery('#loadingMessage').hide();
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
		
		switch(init_data[i].bus_id)
		{
			case 1: tribe = "New_York";
  			break;
			case 2: tribe = "Silicon_Valley";
  			break;
  			case 3: tribe = "Florida";
  			break;
  			case 4: tribe = "Cincinnati";
  			break;
  			case 5: tribe = "Los_Angeles";
  			break;
  			case 6: tribe = "Louisiana";
  			break;
  			case 7: tribe = "Team_Mexico";
  			break;
  			case 8: tribe = "Las_Vegas";
  			break;
  			case 9: tribe = "Washington_DC";
  			break;
  			case 10: tribe = "Boston";
  			break;
  			case 11: tribe = "Stanford";
  			break;
			default: tribe = "Americas";
  		}
		
		
		dv_each_stock.className = "stock_name " + tribe;
		dv_each_stock.setAttribute('id', "single_stock"+i);
		jQuery("#stock_strip").append(dv_each_stock);
		
		jQuery("#single_stock"+i).append('<a href="'+init_data[i].created_at+'" title="'+init_data[i].name+'">$'+init_data[i].ticker+"</a></span>");
			
		//jQuery("#single_stock"+i).append('<span onmouseover="ShowText(\'each_stock'+i+'\'); return true;" onmouseout="HideText(\'each_stock'+i+'\'); return true;" href="javascript:ShowText(\'each_stock'+i+'\')">'+'<a href="'+init_data[i].created_at+'" title="'+init_data[i].name+'">$'+init_data[i].ticker+"</a></span>");
			
		dv_each_stock_info = document.createElement('div');
		dv_each_stock_info.setAttribute('id', "each_stock"+i);
		jQuery("#single_stock"+i).append(dv_each_stock_info);
		//jQuery("#each_stock"+i).append('Stock Name: '+init_data[i].name+'<br>shares: '+init_data[i].shares+'<br>cash: $'+init_data[i].cash+'<br>');
		jQuery("#each_stock"+i).hide();
	}
	
	ShowTick(jQuery('#stock_strip'), strip_length, pauseTime);

}

/*
var cX = 0; var cY = 0; var rX = 0; var rY = 0;
function UpdateCursorPosition(e){ cX = e.pageX; cY = e.pageY;} 
function UpdateCursorPositionDocAll(e){ cX = event.clientX; cY = event.clientY;} 
if(document.all) { document.onmousemove = UpdateCursorPositionDocAll; } 
else { document.onmousemove = UpdateCursorPosition; } 

function AssignPosition(d) { 
	if(self.pageYOffset) { 
		rX = self.pageXOffset; 
		rY = self.pageYOffset; 
	} else if(document.documentElement && document.documentElement.scrollTop) { 
		rX = document.documentElement.scrollLeft; 
		rY = document.documentElement.scrollTop; 
	} else if(document.body) { 
		rX = document.body.scrollLeft; 
		rY = document.body.scrollTop; 
	} 
	
	if(document.all) { 
		cX += rX; 
		cY += rY; 
	} 

	d.style.left = (cX+10) + "px"; 
	d.style.top = (cY+10) + "px"; 
}

function HideText(d) { 
	if(d.length < 1) { return; } 
	document.getElementById(d).style.display = "none"; 
}

function ShowText(d) { 
	if(d.length < 1) { return; } 
	var dd = document.getElementById(d); 
	AssignPosition(dd); 
	dd.style.display = "block"; 
} */

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
