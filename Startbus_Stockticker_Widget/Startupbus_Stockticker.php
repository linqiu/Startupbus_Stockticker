<?php
/**
 * Plugin Name: Startupbus Stockticker
 * Plugin URI: http://linqiu.com
 * Description: Stockticker thAAAng
 * Author: Lin Qiu
 * Version: 0.1.0
 * Author URI: http://linqiu.com
 */

define('STOCKTICKER_VERSION', '0.1.0');
define('STOCKTICKER_PLUGINBASENAME', dirname(plugin_basename(__FILE__)));
define('STOCKTICKER_PLUGINPATH', PLUGINDIR . '/' . STOCKTICKER_PLUGINBASENAME);

class stockticker_widget extends WP_Widget {

	function stockticker_widget() {
	
		if(function_exists('load_plugin_textdomain')) {
			load_plugin_textdomain('stockticker', STOCKTICKER_PLUGINPATH . '/languages', STOCKTICKER_PLUGINBASENAME . '/languages');
		}

		$widget_ops = array(
			'classname' => 'stockticker_widget',
			'description' => __('stock ticker game for startupbus', 'stockticker')
		);

		$control_ops = array();

		$this->WP_Widget('stockticker_widget', __('Startupbus Stockticker', 'stockticker'), $widget_ops, $control_ops);
	}

	function form($instance) {

		// Version of the plugin (hidden field)
		$jzoutput  = 'This displays the game info!';
		
		echo $jzoutput;
	}

	function widget($args, $instance) {
		extract($args);

		echo $before_widget;

		$title = "startupbus stock ticker";

		if(!empty($title)) {
			echo $before_title . $title . $after_title;
		}
		//add_action('wp_enqueue_scripts', 'my_plugin_init');

		echo $this->StockTicker_output();
		echo $after_widget;
	}

	function StockTicker_output() {
		
		
			// display the widget front content (but not immediatly because of cache system)
			echo '
				<div id="StockTicker">
				
				</div>
					<script type="text/javascript" src="wp-content/plugins/Startbus_Stockticker_Widget/js/stock.js"></script>
				
			';
	}
}

add_action('widgets_init', create_function('', 'return register_widget("stockticker_widget");'));
add_action('wp_enqueue_scripts', 'add_my_stylesheet');

   
    function add_my_stylesheet() {
        $myStyleUrl = plugins_url('css/stockticker.css', __FILE__); // Respects SSL, Style.css is relative to the current file
        $myStyleFile = STOCKTICKER_PLUGINPATH . '/css/stockticker.css';
        if ( file_exists($myStyleFile) ) {
            wp_register_style('myStyleSheets', $myStyleUrl);
            wp_enqueue_style( 'myStyleSheets');
        }
    }

/*
function my_plugin_init {

	$sUrlPrefix = self::$PLUGIN_URL.'css/';
	wp_register_style( 'custom', $sUrlPrefix.'stockticker.css' );
	wp_enqueue_style( 'custom' );

		$myStyleUrl = plugins_url('/css/stockticker.css', STOCKTICKER_PLUGINPATH); // Respects SSL, Style.css is relative to the current file
        $myStyleFile = STOCKTICKER_PLUGINPATH . '/css/stockticker.css';
        if ( file_exists($myStyleFile) ) {
            wp_register_style('myStyleSheets', $myStyleUrl);
            wp_enqueue_style( 'myStyleSheets');
        }
}
*/
?>