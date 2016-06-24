window.jQuery = $ = require("jquery");
require("jquery-ui");
require("bootstrap");
// require('./src/js/utils');
require('./src/js/custCarousel');


$(document).ready(function(){
    console.log("Loaded");
    var carousel = document.getElementById('carousel');

    function mql(){
        console.log("mql enter");
        window.setTimeout(function(){
            var carousel = document.getElementById('carousel');
            if (carousel.style['transform'] != '') {
                var thetaVal = carousel.style['transform'].split(')')[1];
                thetaVal = thetaVal.split('(');
                thetaVal = thetaVal[1];
            }
            carousel.style['transform'] = `translateZ(-615px) rotateY(${thetaVal})`;
            console.log("mql ran");
        },10);
        // carousel.style['transform'] = `translateZ(-412px) rotateY(${thetaVal})`;
    };

    function mql2(){
        console.log("mql2 enter");
        window.setTimeout(function(){
            var carousel = document.getElementById('carousel');
            if (carousel.style['transform'] != '') {
                var thetaVal = carousel.style['transform'].split(')')[1];
                thetaVal = thetaVal.split('(');
                thetaVal = thetaVal[1];
            }
            carousel.style['transform'] = `translateZ(-412px) rotateY(${thetaVal})`;
            console.log("mql2 ran");
        },10);
    };

    window.matchMedia("(min-width: 768px)").addListener(mql);
    window.matchMedia("(max-width:760px)").addListener(mql2);

});
