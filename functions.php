<?php
	add_action( 'after_setup_theme', 'rw_setup' );
	add_action('wp_enqueue_scripts', 'rw_add_scripts');

	function rw_setup(){
		add_theme_support( 'post-thumbnails' );
		register_nav_menu( 'primary', __( 'Primary Menu') );
	}

	function rw_add_scripts(){
		wp_enqueue_script('rw-scripts', get_bloginfo('stylesheet_directory').'/assets/js/build/rw-scripts-min.js', array('jquery'), true);
		wp_enqueue_style('rw_css', get_bloginfo('stylesheet_directory').'/assets/css/build/theme.css' );
	}
?>