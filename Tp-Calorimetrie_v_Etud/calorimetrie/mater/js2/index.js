// JavaScript Document
function thermometer1(goalAmount, progressAmount, animate) {
    "use strict";
    var $thermo = $("#thermometer1"),
        $progress = $(".progress1", $thermo),
        $goal = $(".goal1", $thermo),
        percentageAmount;
var $a = parseFloat(document.f1.t1.value); 
var $b = parseFloat(document.f1.t11.value); 
var $c= $a+$b;
    goalAmount = goalAmount || parseFloat($goal.text()),
    progressAmount = progressAmount || parseFloat($c),
	
    percentageAmount = Math.min(Math.round(progressAmount / goalAmount * 1000) / 10, 100); //make sure we have 1 decimal point

    $goal.find(".amount1").text();
    $progress.find(".amount1").text();

    $progress.find(".amount1").hide();
    if (animate !== false) {
        $progress.animate({
            "height": percentageAmount + "%"
        }, 1200, function () {
            $(this).find(".amount").fadeIn(200);
        });
    } else {
        $progress.css({
            "height": percentageAmount + "%"
        });
        $progress.find(".amount1").fadeIn(200);
    }
}

$(document).ready(function () {

    //thermometer1();
   
});