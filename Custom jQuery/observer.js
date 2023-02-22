 jQuery(function($) {
    $(document).ready(function() {
        observeMe('.section', '-80px');
    }); 
    //elem is the class
    //startingpoint is in px from the viewport
    function observeMe(elem, startingpoint) {
        let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('active');
            } else {
                $(entry.target).removeClass('active');
            }
        });
        }, { rootMargin: startingpoint}); 
        $(elem).each(function() {
            observer.observe(this);
        });
    }
}); 
