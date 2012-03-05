<?php
/**
 * Plugin Name: Startupbus Stockticker
 * Plugin URI: http://linqiu.com
 * Description: Stockticker thAAAng
 * Author: Lin Qiu
 * Version: 0.5.0
 * Author URI: http://linqiu.com
 */

define('STOCKTICKER_VERSION', '0.5.0');
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
		$instance = wp_parse_args((array) $instance, array(
			'width_of_widget' => '',
			'another' => ''
		));
		// Version of the plugin (hidden field)
		$jzoutput  = 'This displays the game info!';
		$jzoutput .= '
			<p style="border-bottom: 1px solid #DFDFDF;">
				<label for="' . $this->get_field_id('width_of_widget') . '"><strong>Enter Width of Widget</strong></label>
			</p>
			<p>
				<input id="' . $this->get_field_id('width_of_widget') . '" name="' . $this->get_field_name('width_of_widget') . '" type="text" value="' . $instance['width_of_widget'] . '" />
			</p>
		';
		
		echo $jzoutput;
	}
	
	function update($new_instance, $old_instance) {
		
		$instance = $old_instance;

		$new_instance = wp_parse_args((array) $new_instance, array(
			'width_of_widget' => '',
			'another' => ''
		));

		$instance['width_of_widget'] = strip_tags($new_instance['width_of_widget']);

		return $instance;
	}
	
	function widget($args, $instance) {
		extract($args);

		echo $before_widget;
		
		if(empty($instance['width_of_widget'])) { 
			$width_of_widget = "179px;";
		} else {
			$width_of_widget = $instance['width_of_widget'].'px;';
		}
		
		$title = "startupbus stock ticker";

		if(!empty($title)) {
			echo $before_title . $title . $after_title;
		}
		//add_action('wp_enqueue_scripts', 'my_plugin_init');

		echo $this->StockTicker_output($width_of_widget);
		echo $after_widget;
	}

	function StockTicker_output($instance) {
		
			echo '
				<div id="StockTicker" style="width:'.$instance.'">
					<div id="loadingMessage"></div>
				</div>
				<script type="text/javascript" src="wp-content/plugins/Startbus_Stockticker_Widget/js/stock.js"></script>
				
			';
	}
}

add_action('widgets_init', create_function('', 'return register_widget("stockticker_widget");'));
add_action('wp_enqueue_scripts', 'add_my_stylesheet');
//add_action('wp_enqueue_scripts', 'add_my_js');
   
    function add_my_stylesheet() {
        $myStyleUrl = plugins_url('css/stockticker.css', __FILE__); // Respects SSL, Style.css is relative to the current file
        $myStyleFile = STOCKTICKER_PLUGINPATH . '/css/stockticker.css';
        if ( file_exists($myStyleFile) ) {
            wp_register_style('myStyleSheets', $myStyleUrl);
            wp_enqueue_style( 'myStyleSheets');
        }
    }
   	
   	function add_my_js() {
    		wp_register_script('custom_script',
       			'/'.STOCKTICKER_PLUGINPATH . '/js/stock.js',
       			array('jquery'),
       			'1.0' );
   			// enqueue the script
   			wp_enqueue_script('custom_script');
    	
    }

?>