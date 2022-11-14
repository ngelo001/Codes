function taxonomyList($name){
      $terms = get_terms( array(
        'taxonomy' => $name,
        'hide_empty' => true,
      ) );
      
      echo '<ul>';
      if ( !empty($terms) ) {
        foreach( $terms as $category ) {
          $selected = ($_GET[$name] == $category->slug ? 'checked':'');
          //echo '<option value="'.$category->slug.'" '.$selected.'>'.$category->name.'</option>';  
          echo '<li>';
            echo '<input type="radio" id="category-'.$category->slug.'" name="'.$name.'" value="'.$category->slug.'" '.$selected.'>';
            echo '<label for="category-'.$category->slug.'">'.$category->name.'</label>';
          echo '</li>';
        }
      }
      echo '</ul>';

}
