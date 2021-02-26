(function($){

    "use strict";
    /* Inicializar nosso Contador*/
    $('.contar').counterUp({
        time: 1000,
        delay: 10
    });

    var $doc = $('html,body');
    $('.scroll-page').click(function(){
        $doc.animate({
            scrollTop: $($.attr(this,'href')).offset().top
        },500);
        return false;
    })

    $(document).ready(function(){
        $window = $(window);
        //Captura cada elemento section com o data-type "background"
        $('section[data-type="background"]').each(function(){
            var $scroll = $(this);   
                //Captura o evento scroll do navegador e modifica o backgroundPosition de acordo com seu deslocamento.            
                $(window).scroll(function() {
                    var yPos = -($window.scrollTop() / $scroll.data('speed')); 
                    var coords = '50% '+ yPos + 'px';
                    $scroll.css({ backgroundPosition: coords });    
                });
       });  
    }); 

})(jQuery);