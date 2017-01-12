$(".calc-hint").click(function () {
    $("#calc-input-custom-point").val($(this).text());
});
$(".calc-btn-make-calc").click(function(){
    var min_with = Number($("#calc-input-min-width").val());
    var max_with = Number($("#calc-input-max-width").val());
    var min_font = Number($("#calc-input-min-fz").val());
    var max_font = Number($("#calc-input-max-fz").val());
    var custom_point = Number($("#calc-input-custom-point").val());

    var result = ( (custom_point - min_with)/(max_with - min_with) * (max_font - min_font) + min_font);
    
    $(".calc-result-text").text(""); 
    if (custom_point < max_with && custom_point > min_with) {
        $(".calc-result-text").removeClass("note").text(result.toFixed(2));   
    } else {
        $(".calc-result-text").addClass("note").text("Please enter number between min and max screen size");   
    }

    console.log(result);
});