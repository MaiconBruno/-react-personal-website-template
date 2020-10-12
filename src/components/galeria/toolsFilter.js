import $ from 'jquery';

$(document).ready(function(){
    $('#All').click(function(){
        $('[name="mobile"]').show();
        $('[name="web"]').show();
        $('#All').css({color:"#00ff86"});
        $('#Desk').css({color:"white"});
        $('#Mobi').css({color:"white"});
    });
    $('#Desk').click(function(){
        $('[name="mobile"]').hide();
        $('[name="web"]').show();
        $('#Desk').css({color:"#00ff86"});
        $('#All').css({color:"white"});
        $('#Mobi').css({color:"white"});
    });
    $('#Mobi').click(function(){
       $('[name="web"]').hide();
       $('[name="mobile"]').show();
       $('#Mobi').css({color:"#00ff86"});
       $('#All').css({color:"white"});
       $('#Desk').css({color:"white"});
   });  
});
