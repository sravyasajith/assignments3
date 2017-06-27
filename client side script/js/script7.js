$(document).ready(function(){
    $("#btn").mouseenter(function(){
        alert("You entered paragraph!");
        $("#btn").mouseleave(function(){
        alert("You leave paragraph!");
    });
    });
});