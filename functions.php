<?php
add_theme_support( 'post-thumbnails', array( 'post', 'page' ) ); 
flush_rewrite_rules();

// Add featured image to Custom post

add_action( 'after_setup_theme', 'umbrella_theme_setup' );
function umbrella_theme_setup(){
    add_theme_support('post-thumbnails');
}

// end

function custom_theme_assets() {
	wp_enqueue_style( 'style', get_stylesheet_uri() );
}
 
add_action( 'wp_enqueue_scripts', 'custom_theme_assets' );

/* -------------------------------------------------------
	JavaScript Global variables definition
----------------------------------------------------------*/
add_action( 'wp_enqueue_scripts', function() { ?>
	<script>
    	var SITE_URL = "<?php echo get_site_url();?>"; 
	</script>
<?php }, 19);
?>
