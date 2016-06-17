window.jQuery = $ = require("jquery");
require("jquery-ui");
require("bootstrap");
// require('./src/js/utils');
require('./src/js/custCarousel');


$(document).ready(function(){
    console.log("Loaded");

    function  mediaQueryResponse(mql){
        if (mql.matches){
            carousel.style['transform'] = `translateZ(-577px)`;
        } else {
            carousel.style['transform'] = `translateZ(-412px)`;
        }
    }

    var mql = window.matchMedia("(min-width: 768px)");

    mql.addListener(mediaQueryResponse);


});
