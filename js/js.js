"use strict"

$(document).ready(function(){

    $('img').click(function(){
        // $(this).fadeOut();

        $(this).slideToggle();
    })

    $('#btnRestore').click(function(){
        $('img').fadeIn(700);
    })
})