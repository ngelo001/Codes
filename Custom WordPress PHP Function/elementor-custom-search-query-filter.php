<?php
add_action( 'elementor/query/query_id', function( $query ) {
    $category = $_GET['news_cat'] ? $_GET['news_cat'] : '';
    $tags = $_GET['tags'] ? $_GET['tags'] : '';
    $search = $_GET['search'] ? $_GET['search'] : '';
    
    $query->set( 'category_name', $category );
    $query->set( 'post_tag', $tag );
    $query->set( 's', $search );
});
?>
