jQuery(function($) {
    $(document).ready(function() {
        equalHeight('.card');
        equalHeight('.filter-option li');
    });

    function equalHeight($element) {
        window.addEventListener("load", function(){equalChanges()});
        window.addEventListener("resize", function(){equalChanges()});
        function equalChanges() {
            $($element).each(function(){
               var maxHeight = -1;
        
               $($element).each(function() {
                 maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
               });
        
               $($element).each(function() {
                 $(this).height(maxHeight);
               });
            });   
        }
    }
});