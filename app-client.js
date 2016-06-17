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
    };

    function mediaQueryResponseMid(mql2){
        if (mql2.matches){
            // MUST COMPLETE WHEN TZ IS KNOWN!!!!
            console.log("here");
        }
    }

    var mql = window.matchMedia("(min-width: 768px)");
    var mql2 = window.matchMedia("((min-width:413px) and (max-width:767px))");

    mql.addListener(mediaQueryResponse);
    mql2.addListener(mediaQueryResponseMid)


});
