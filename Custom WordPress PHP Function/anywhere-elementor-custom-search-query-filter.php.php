<?php
function cpt_search_function($query_args){  
  $booking_search = $_GET['booking_search'] ? $_GET['booking_search'] : '';
  $query_args =   array   (
    'post_type' => 'locations',
    's' => $booking_search,
  );

  return $query_args;
}
add_filter('cpt_query_id', 'cpt_search_function');
?>
