<script>
//Value of format parameters from wordpress paginate_links needs to point to '?page=%#%',
jQuery(function($){
    $(document).ready(function(){
        var params = window.location.pathname.split('/').slice(1);
        var topic = params[0];
        var category = params[1];

        $('a.page-numbers').each(function(){
            var text = $(this).text();
            $(this).attr('href', '/'+topic+'/'+category+'/?page='+text+'');
            var currentPage = $('.current').text();

            //NEXT PAGE
            var nextPage = +currentPage + 1;
            $('a.next.page-numbers').attr('href', '/'+topic+'/'+category+'/?page='+nextPage+'');


            //PREVIOUS PAGE
            var prevPage = +currentPage - 1;
            console.log(prevPage);
            $('a.prev.page-numbers').attr('href', '/'+topic+'/'+category+'/?page='+prevPage+'');
        });
    });
});  
</script>
