$(document).ready(function() {
    $('.overlay-wrapper').hide();
    $('.side-bar-icon').click(function() {
        $('.side').addClass('side-transform');
        $('.overlay-wrapper').fadeIn(500);
    })
    $('.overlay-wrapper').click(function() {
        $('.side').removeClass('side-transform');
        $('.side').addClass('trans');
        $('.overlay-wrapper').fadeOut(500);
    })
    $('.chev').click(function() {
        $('.chev-down').show('1000');
        $("i", this).toggleClass("fas fa-chevron-down fas fa-chevron-up");
    });
    $('#pos-re').click(function() {
        $('#drop-toggle').fadeToggle('slow');
        $('.chev-down i').toggleClass('toggleclr')
    });
    $('#drop-menu-w-t').click(function() {
        $('#drop-menu-w-and-t').fadeToggle('slow');
    });
    $('#d-m').click(function() {
        $('#d-m-data').fadeToggle('slow');
    });
    $('#p-t').click(function() {
        $('#p-t-data').fadeToggle('slow');
    });
    $('#v-a').click(function() {
        $('#v-a-data').fadeToggle('slow');
    });
    $('#business').click(function() {
        $('#b-a-data').fadeToggle('slow');
    });
})