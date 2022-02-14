// Manipulating styles with JQuery;
$("h1").addClass("big-title margin");


// Manipulating text with JQuery;
$("button").html("<em>Hey</em>");// using .html to manpulate the 

//Manipulating Attributes with JQuery;
$("a").attr("href", "https://www.yahoo.com");

//Adding Event Listners with JQuery;
$("h1").css("color", "purple")


// changing color with the help of button
$("button").click(function(){
    $("h1").css("color", "purple");
})

// changing h1 with (event.key);
$("document").keypress(function (event) { 
    $("h1").text(event.key);
});

// animating with JQuery;
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})
