
// var para1=document.getElementById('para1');
// para1.innerHTML="Welcome";

// $('#para1').hide();


// $('p').html("Welcome");



// $('para').width(100);

// $('#para1').text('Welcome');

/*
    
    function $(query){
        return document.querySelector(query);
    }

*/



// $('p').css('color', 'red');
// $('p').css('fontSize', '30px');


$("p").css({

    fontSize:"30px",
    color:"grey"

});

$('div').css({

    width:"100px",
    height:"100px",
    backgroundColor:"cyan"

});

// $('div').click(function(){

//     alert("Div Clicked");

// });


$('div').on('click', function(){

    var element=$(this);
    element.width(element.width()+10+"px");
    // alert("Div Clicked");

});

$('a').on('click', function(){

    event.preventDefault();
    alert("Anchor tag Clicked");

});






