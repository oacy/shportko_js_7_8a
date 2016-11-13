
$(document).ready(function () {
    $("p").hide();
    $("p:first").fadeIn();
    $("a:first").addClass("active");
    
    $( "a" ).click(function() {
        event.preventDefault();
        index = $( "a" ).index( this );
        $( "p" ).hide();
        $( "p" ).eq(index).show();

        $("a").removeClass("active");
        $(this).addClass("active");
    });
});



