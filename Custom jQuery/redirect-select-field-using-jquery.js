jQuery(function($) {
    $(document).ready(function() {
    	$('select').on('change', function(e){
    		e.preventDefault();
    		var selectVal = $(this).val();
    		if(selectVal){
    			window.location.href = selectVal;
    		}
    	});
    });
});
