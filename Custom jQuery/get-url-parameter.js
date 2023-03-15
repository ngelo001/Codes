function getURLParameters(paramName) {
    var sURL = window.document.URL.toString();
    if (sURL.indexOf("?") < 0) return "No Parameters Found";
    var arrParams = sURL.split("?")[1].split("&");
    for (var i = 0; i < arrParams.length; i++) {
        var sParam = arrParams[i].split("=");
        if (sParam[0] == paramName) return sParam[1] ? decodeURIComponent(sParam[1]) : "No Value";
    }
    return "No Parameters Found";
}

//Sample Usage
window.addEventListener("load", function () {
    jQuery(function ($) {
        $(document).ready(function () {          
          var portfolio_cat = getURLParameters("portfolio_category");
          $('option[value="' + portfolio_cat + '"]').prop("selected", true);
        });
    });
});
