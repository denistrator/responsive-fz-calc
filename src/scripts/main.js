(function() {
    var calcHins = document.querySelectorAll(".calc-hint");
    var custom_point = document.querySelector("#calc-input-custom-point");

    for (var i = calcHins.length - 1; i >= 0; i--) {
        calcHins[i].addEventListener("click", function() {
            custom_point.value = this.innerHTML;
        }, false);
    }

    document.querySelector(".calc-btn-make-calc").addEventListener("click", function() {
        var min_with = +document.querySelector("#calc-input-min-width").value;
        var max_with = +document.querySelector("#calc-input-max-width").value;
        var min_font = +document.querySelector("#calc-input-min-fz").value;
        var max_font = +document.querySelector("#calc-input-max-fz").value;
        var custom_point = +document.querySelector("#calc-input-custom-point").value;

        var result = ((custom_point - min_with) / (max_with - min_with) * (max_font - min_font) + min_font);

        var resultMessage = document.querySelector(".calc-result-text");
        resultMessage.innerHTML = "";
        if (custom_point <= max_with && custom_point >= min_with) {
            resultMessage.classList.remove("note");
            resultMessage.innerHTML = result.toFixed(2);
        } else {
            resultMessage.classList.add("note");
            resultMessage.innerHTML = "Please enter number between min and max screen size";
        }
    }, false);
})();
